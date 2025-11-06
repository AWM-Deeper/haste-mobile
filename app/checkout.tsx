'use client';

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useStore } from '@/lib/store';
import { apiClient } from '@/lib/api-client';

type CheckoutStep = 'shipping' | 'payment' | 'review';

export default function CheckoutScreen() {
  const router = useRouter();
  const { cart, clearCart } = useStore();
  const [step, setStep] = useState<CheckoutStep>('shipping');
  const [loading, setLoading] = useState(false);
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleShippingNext = () => {
    if (!shippingData.firstName || !shippingData.address || !shippingData.city) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }
    setStep('payment');
  };

  const handlePaymentNext = () => {
    if (!paymentData.cardName || !paymentData.cardNumber || !paymentData.expiry) {
      Alert.alert('Error', 'Please fill all required payment fields');
      return;
    }
    setStep('review');
  };

  const handlePlaceOrder = async () => {
    setLoading(true);
    try {
      const orderData = {
        customer: {
          first_name: shippingData.firstName,
          last_name: shippingData.lastName,
          email: 'customer@example.com',
        },
        shipping_address: {
          first_name: shippingData.firstName,
          last_name: shippingData.lastName,
          address_1: shippingData.address,
          city: shippingData.city,
          province: shippingData.state,
          postal_code: shippingData.zipCode,
          country_code: shippingData.country,
        },
        items: cart,
      };

      const response = await apiClient.post('/store/orders', orderData);
      clearCart();
      Alert.alert('Success', 'Order placed successfully!', [
        { text: 'OK', onPress: () => router.push('/(orders)') },
      ]);
    } catch (error) {
      console.error('Order placement failed:', error);
      Alert.alert('Error', 'Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Step Indicator */}
      <View style={styles.stepContainer}>
        {(['shipping', 'payment', 'review'] as const).map((s, idx) => (
          <View key={s} style={styles.stepWrapper}>
            <View
              style={[
                styles.stepCircle,
                {
                  backgroundColor:
                    step === s || (['shipping', 'payment', 'review'].indexOf(step) || 0) > idx
                      ? '#A855F7'
                      : '#E5E7EB',
                },
              ]}
            >
              <Text style={styles.stepNumber}>{idx + 1}</Text>
            </View>
            <Text style={styles.stepLabel}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Text>
          </View>
        ))}
      </View>

      {/* Shipping Step */}
      {step === 'shipping' && (
        <View style={styles.stepContent}>
          <Text style={styles.title}>Shipping Address</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={shippingData.firstName}
            onChangeText={(text) => setShippingData({ ...shippingData, firstName: text })}
            placeholderTextColor="#9CA3AF"
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={shippingData.lastName}
            onChangeText={(text) => setShippingData({ ...shippingData, lastName: text })}
            placeholderTextColor="#9CA3AF"
          />
          <TextInput
            style={styles.input}
            placeholder="Street Address"
            value={shippingData.address}
            onChangeText={(text) => setShippingData({ ...shippingData, address: text })}
            placeholderTextColor="#9CA3AF"
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            value={shippingData.city}
            onChangeText={(text) => setShippingData({ ...shippingData, city: text })}
            placeholderTextColor="#9CA3AF"
          />
          <TextInput
            style={styles.input}
            placeholder="State/Province"
            value={shippingData.state}
            onChangeText={(text) => setShippingData({ ...shippingData, state: text })}
            placeholderTextColor="#9CA3AF"
          />
          <TextInput
            style={styles.input}
            placeholder="ZIP/Postal Code"
            value={shippingData.zipCode}
            onChangeText={(text) => setShippingData({ ...shippingData, zipCode: text })}
            placeholderTextColor="#9CA3AF"
          />
          <TextInput
            style={styles.input}
            placeholder="Country"
            value={shippingData.country}
            onChangeText={(text) => setShippingData({ ...shippingData, country: text })}
            placeholderTextColor="#9CA3AF"
          />
          <TouchableOpacity style={styles.button} onPress={handleShippingNext}>
            <Text style={styles.buttonText}>Continue to Payment</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Payment Step */}
      {step === 'payment' && (
        <View style={styles.stepContent}>
          <Text style={styles.title}>Payment Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Cardholder Name"
            value={paymentData.cardName}
            onChangeText={(text) => setPaymentData({ ...paymentData, cardName: text })}
            placeholderTextColor="#9CA3AF"
          />
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={paymentData.cardNumber}
            onChangeText={(text) => setPaymentData({ ...paymentData, cardNumber: text })}
            placeholderTextColor="#9CA3AF"
          />
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="MM/YY"
              value={paymentData.expiry}
              onChangeText={(text) => setPaymentData({ ...paymentData, expiry: text })}
              placeholderTextColor="#9CA3AF"
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="CVV"
              value={paymentData.cvv}
              onChangeText={(text) => setPaymentData({ ...paymentData, cvv: text })}
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handlePaymentNext}>
            <Text style={styles.buttonText}>Review Order</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Review Step */}
      {step === 'review' && (
        <View style={styles.stepContent}>
          <Text style={styles.title}>Order Review</Text>
          <View style={styles.reviewCard}>
            <Text style={styles.sectionTitle}>Shipping Address</Text>
            <Text style={styles.reviewText}>{shippingData.firstName} {shippingData.lastName}</Text>
            <Text style={styles.reviewText}>{shippingData.address}</Text>
            <Text style={styles.reviewText}>{shippingData.city}, {shippingData.state} {shippingData.zipCode}</Text>
            <Text style={styles.reviewText}>{shippingData.country}</Text>
          </View>
          <View style={styles.reviewCard}>
            <Text style={styles.sectionTitle}>Order Items</Text>
            {cart.map((item) => (
              <View key={item.productId} style={styles.itemRow}>
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
              </View>
            ))}
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
          </View>
          <TouchableOpacity
            style={[styles.button, { opacity: loading ? 0.6 : 1 }]}
            onPress={handlePlaceOrder}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text style={styles.buttonText}>Place Order</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  stepWrapper: {
    alignItems: 'center',
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepNumber: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  stepLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  stepContent: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    color: '#1F2937',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfInput: {
    flex: 1,
  },
  button: {
    backgroundColor: '#A855F7',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  reviewCard: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#A855F7',
  },
  reviewText: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  itemName: {
    fontSize: 12,
    color: '#1F2937',
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 12,
    color: '#A855F7',
    fontWeight: '600',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#A855F7',
  },
});
