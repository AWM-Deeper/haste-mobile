import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { useStore } from '@/lib/store';

export default function AccountScreen() {
  const router = useRouter();
  const { user, clearCart } = useStore();
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);

  const handleLogout = () => {
    clearCart();
    router.push('/(home)');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john@example.com</Text>
      </View>

      {/* Account Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Information</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>john@example.com</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>+1 (555) 123-4567</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Member Since</Text>
            <Text style={styles.infoValue}>Jan 2024</Text>
          </View>
        </View>
      </View>

      {/* Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.settingCard}>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Push Notifications</Text>
            <Switch value={notifications} onValueChange={setNotifications} />
          </View>
          <View style={styles.divider} />
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Email Updates</Text>
            <Switch value={emailUpdates} onValueChange={setEmailUpdates} />
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>📋</Text>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Order History</Text>
            <Text style={styles.actionSubtitle}>View all past orders</Text>
          </View>
          <Text style={styles.actionArrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>❤️</Text>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Wishlist</Text>
            <Text style={styles.actionSubtitle}>Your saved items</Text>
          </View>
          <Text style={styles.actionArrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>🎁</Text>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Coupons</Text>
            <Text style={styles.actionSubtitle}>Available discounts</Text>
          </View>
          <Text style={styles.actionArrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Support */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.supportButton}>
          <Text style={styles.supportIcon}>💬</Text>
          <Text style={styles.supportText}>Contact Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.supportButton}>
          <Text style={styles.supportIcon}>📱</Text>
          <Text style={styles.supportText}>Help & FAQ</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>

      <View style={styles.spacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  profileSection: { alignItems: 'center', paddingVertical: 24, borderBottomColor: '#E5E7EB', borderBottomWidth: 1 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#A855F7', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  avatarText: { fontSize: 40 },
  name: { fontSize: 20, fontWeight: '700', color: '#1F2937', marginBottom: 4 },
  email: { fontSize: 14, color: '#6B7280' },
  section: { paddingHorizontal: 16, paddingVertical: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1F2937', marginBottom: 12 },
  infoCard: { backgroundColor: '#F9FAFB', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  infoLabel: { fontSize: 14, color: '#6B7280', fontWeight: '500' },
  infoValue: { fontSize: 14, color: '#1F2937', fontWeight: '600' },
  divider: { height: 1, backgroundColor: '#E5E7EB' },
  settingCard: { backgroundColor: '#F9FAFB', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12 },
  settingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  settingLabel: { fontSize: 14, color: '#1F2937', fontWeight: '500' },
  actionButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 12, marginBottom: 8, backgroundColor: '#F9FAFB', borderRadius: 12 },
  actionIcon: { fontSize: 24, marginRight: 12 },
  actionContent: { flex: 1 },
  actionTitle: { fontSize: 14, fontWeight: '600', color: '#1F2937' },
  actionSubtitle: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  actionArrow: { fontSize: 20, color: '#A855F7' },
  supportButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 12, marginBottom: 8, backgroundColor: '#F0F9FF', borderRadius: 12, borderLeftColor: '#3B82F6', borderLeftWidth: 3 },
  supportIcon: { fontSize: 20, marginRight: 12 },
  supportText: { fontSize: 14, fontWeight: '500', color: '#1F2937' },
  logoutButton: { marginHorizontal: 16, marginVertical: 24, paddingVertical: 14, backgroundColor: '#FEE2E2', borderRadius: 8, alignItems: 'center' },
  logoutText: { color: '#EF4444', fontWeight: '600', fontSize: 16 },
  spacing: { height: 20 },
});
