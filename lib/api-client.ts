import axios from 'axios';

const API_BASE_URL = 'https://stingray-app-yitsm.ondigitalocean.app';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set auth token if available
export const setAuthToken = (token: string) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

// Remove auth token
export const removeAuthToken = () => {
  delete apiClient.defaults.headers.common['Authorization'];
};

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  thumbnail: string;
  images: { url: string }[];
  variants: {
    id: string;
    title: string;
    prices: { currency_code: string; amount: number }[];
  }[];
}

export interface Cart {
  id: string;
  items: CartItem[];
  subtotal: number;
  tax_total: number;
  total: number;
}

export interface CartItem {
  id: string;
  product_id: string;
  variant_id: string;
  quantity: number;
  unit_price: number;
}

export interface Order {
  id: string;
  display_id: number;
  status: string;
  total: number;
  created_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  title: string;
  quantity: number;
  unit_price: number;
}

// Products
export const getProducts = async (query?: string, filters?: any) => {
  try {
    const params = new URLSearchParams();
    if (query) params.append('q', query);
    if (filters) {
      Object.keys(filters).forEach(key => {
        params.append(key, filters[key]);
      });
    }
    const response = await apiClient.get(`/store/products?${params.toString()}`);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await apiClient.get(`/store/products/${id}`);
    return response.data.product;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

// Cart
export const getCart = async (cartId: string) => {
  try {
    const response = await apiClient.get(`/store/carts/${cartId}`);
    return response.data.cart;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

export const createCart = async () => {
  try {
    const response = await apiClient.post('/store/carts');
    return response.data.cart;
  } catch (error) {
    console.error('Error creating cart:', error);
    throw error;
  }
};

export const addToCart = async (cartId: string, variantId: string, quantity: number) => {
  try {
    const response = await apiClient.post(`/store/carts/${cartId}/line-items`, {
      variant_id: variantId,
      quantity,
    });
    return response.data.cart;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

export const updateCartItem = async (cartId: string, lineItemId: string, quantity: number) => {
  try {
    const response = await apiClient.post(`/store/carts/${cartId}/line-items/${lineItemId}`, {
      quantity,
    });
    return response.data.cart;
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
};

export const removeCartItem = async (cartId: string, lineItemId: string) => {
  try {
    const response = await apiClient.delete(`/store/carts/${cartId}/line-items/${lineItemId}`);
    return response.data.cart;
  } catch (error) {
    console.error('Error removing cart item:', error);
    throw error;
  }
};

// Orders
export const getOrders = async (customerId: string) => {
  try {
    const response = await apiClient.get(`/admin/orders?customer_id=${customerId}`);
    return response.data.orders || [];
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

export const getOrderById = async (orderId: string) => {
  try {
    const response = await apiClient.get(`/admin/orders/${orderId}`);
    return response.data.order;
  } catch (error) {
    console.error(`Error fetching order ${orderId}:`, error);
    throw error;
  }
};

// Auth
export const registerCustomer = async (email: string, password: string, firstName: string, lastName: string) => {
  try {
    const response = await apiClient.post('/store/customers', {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    });
    return response.data.customer;
  } catch (error) {
    console.error('Error registering customer:', error);
    throw error;
  }
};

export const loginCustomer = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/store/auth', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const getCustomer = async () => {
  try {
    const response = await apiClient.get('/store/customers/me');
    return response.data.customer;
  } catch (error) {
    console.error('Error fetching customer:', error);
    throw error;
  }
};

export default apiClient;
