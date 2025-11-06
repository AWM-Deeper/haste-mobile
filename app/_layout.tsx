import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const COLORS = {
  primary: '#A855F7',
  secondary: '#3B82F6',
  background: '#FFFFFF',
  text: '#1F2937',
};

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Tabs
        screenOptions={{
          headerShown: true,
          tabBarStyle: {
            backgroundColor: COLORS.background,
            borderTopColor: '#E5E7EB',
            borderTopWidth: 1,
            paddingBottom: 5,
            height: 65,
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: '#9CA3AF',
          headerStyle: {
            backgroundColor: COLORS.background,
            borderBottomColor: '#E5E7EB',
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontWeight: '800',
            fontSize: 18,
            color: COLORS.text,
          },
          headerTitle: 'HASTE',
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: 'Home',
            headerTitle: 'HASTE',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(shop)"
          options={{
            title: 'Shop',
            headerTitle: 'Products',
            tabBarIcon: ({ color }) => (
              <Ionicons name="grid" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(cart)"
          options={{
            title: 'Cart',
            headerTitle: 'Shopping Cart',
            tabBarIcon: ({ color }) => (
              <Ionicons name="cart" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(orders)"
          options={{
            title: 'Orders',
            headerTitle: 'My Orders',
            tabBarIcon: ({ color }) => (
              <Ionicons name="document" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(account)"
          options={{
            title: 'Account',
            headerTitle: 'My Profile',
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
