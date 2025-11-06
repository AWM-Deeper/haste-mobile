import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { useStore } from '@/lib/store';

export default function CartScreen() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity } = useStore();
  const total = cart.reduce((sum, item) => sum + (item.unit_price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Your cart is empty</Text>
        <TouchableOpacity style={styles.shopButton} onPress={() => router.push('/(shop)')}>  
          <Text style={styles.shopButtonText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{item.product_id}</Text>
                <Text style={styles.itemPrice}>${(item.unit_price / 100).toFixed(2)}</Text>
              </View>
              <View style={styles.quantityControl}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
                  <Text style={styles.btn}>−</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                  <Text style={styles.btn}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text style={styles.removeBtn}>✕</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>${(total / 100).toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutBtnText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 16, paddingTop: 12 },
  title: { fontSize: 24, fontWeight: '700', color: '#1F2937', marginBottom: 16 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyTitle: { fontSize: 18, color: '#6B7280', marginBottom: 16 },
  shopButton: { backgroundColor: '#A855F7', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 6 },
  shopButtonText: { color: '#FFFFFF', fontWeight: '600' },
  cartItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomColor: '#E5E7EB', borderBottomWidth: 1 },
  itemInfo: { flex: 1 },
  itemTitle: { fontSize: 14, fontWeight: '600', color: '#1F2937', marginBottom: 4 },
  itemPrice: { fontSize: 14, color: '#A855F7', fontWeight: '700' },
  quantityControl: { flexDirection: 'row', alignItems: 'center', marginRight: 12 },
  btn: { width: 24, height: 24, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 4, fontSize: 16, fontWeight: '600' },
  quantity: { marginHorizontal: 8, fontWeight: '600', color: '#1F2937' },
  removeBtn: { fontSize: 18, color: '#EF4444', fontWeight: '600' },
  footer: { borderTopColor: '#E5E7EB', borderTopWidth: 1, paddingVertical: 16 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  totalLabel: { fontSize: 16, fontWeight: '600', color: '#1F2937' },
  totalAmount: { fontSize: 18, fontWeight: '700', color: '#A855F7' },
  checkoutBtn: { backgroundColor: '#A855F7', paddingVertical: 14, borderRadius: 6, alignItems: 'center' },
  checkoutBtnText: { color: '#FFFFFF', fontWeight: '600', fontSize: 16 },
});
