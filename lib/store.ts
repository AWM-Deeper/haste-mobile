import { create } from 'zustand';

export interface Product {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  variants: Array<{
    id: string;
    prices: Array<{ amount: number; currency_code: string }>;n  }>;
}

export interface CartItem {
  product: Product;
  quantity: number;
  variantId: string;
}

export interface Order {
  id: string;
  status: string;
  total: number;
  createdAt: string;
  items: CartItem[];
}

interface StoreState {
  products: Product[];
  cart: CartItem[];
  orders: Order[];
  loading: boolean;
  fetchProducts: () => Promise<void>;
  addToCart: (product: Product, quantity: number, variantId: string) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: (order: Order) => void;
}

export const useStore = create<StoreState>((set) => ({
  products: [],
  cart: [],
  orders: [],
  loading: false,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      // Mock data for now - connect to Medusa API
      const mockProducts: Product[] = [
        {
          id: '1',
          title: 'Premium Wireless Headphones',
          description: 'High-quality sound with noise cancellation',
          thumbnail: '🎧',
          variants: [{ id: 'v1', prices: [{ amount: 29999, currency_code: 'USD' }] }],
        },
        {
          id: '2',
          title: 'Stylish Sneakers',
          description: 'Comfortable and durable athletic shoes',
          thumbnail: '👟',
          variants: [{ id: 'v2', prices: [{ amount: 12999, currency_code: 'USD' }] }],
        },
        {
          id: '3',
          title: 'Smart Watch',
          description: 'Track your fitness and stay connected',
          thumbnail: '⌚',
          variants: [{ id: 'v3', prices: [{ amount: 19999, currency_code: 'USD' }] }],
        },
        {
          id: '4',
          title: 'Portable Speaker',
          description: 'Crystal clear sound anywhere',
          thumbnail: '🔊',
          variants: [{ id: 'v4', prices: [{ amount: 7999, currency_code: 'USD' }] }],
        },
      ];
      set({ products: mockProducts, loading: false });
    } catch (error) {
      console.error('Failed to fetch products:', error);
      set({ loading: false });
    }
  },

  addToCart: (product, quantity, variantId) => {
    set((state) => {
      const existing = state.cart.find((item) => item.product.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          ),
        };
      }
      return { cart: [...state.cart, { product, quantity, variantId }] };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({ cart: state.cart.filter((item) => item.product.id !== productId) }));
  },

  updateCartQuantity: (productId, quantity) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    }));
  },

  clearCart: () => set({ cart: [] }),

  placeOrder: (order) => {
    set((state) => ({ orders: [...state.orders, order], cart: [] }));
  },
}));
