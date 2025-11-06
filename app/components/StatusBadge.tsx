import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

interface StatusBadgeProps {
  status: OrderStatus;
  size?: 'small' | 'medium' | 'large';
}

const getStatusColor = (status: OrderStatus): string => {
  switch (status) {
    case 'pending':
      return '#FCD34D';
    case 'processing':
      return '#93C5FD';
    case 'shipped':
      return '#86EFAC';
    case 'delivered':
      return '#10B981';
    case 'cancelled':
      return '#EF4444';
    default:
      return '#E5E7EB';
  }
};

const getStatusTextColor = (status: OrderStatus): string => {
  switch (status) {
    case 'pending':
      return '#92400E';
    case 'processing':
      return '#1E40AF';
    case 'shipped':
      return '#166534';
    case 'delivered':
      return '#065F46';
    case 'cancelled':
      return '#7F1D1D';
    default:
      return '#374151';
  }
};

const getSizeStyles = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return { paddingHorizontal: 8, paddingVertical: 4, fontSize: 12 };
    case 'medium':
      return { paddingHorizontal: 12, paddingVertical: 6, fontSize: 13 };
    case 'large':
      return { paddingHorizontal: 16, paddingVertical: 8, fontSize: 14 };
    default:
      return { paddingHorizontal: 12, paddingVertical: 6, fontSize: 13 };
  }
};

export default function StatusBadge({ status, size = 'medium' }: StatusBadgeProps) {
  const statusLabel = status.charAt(0).toUpperCase() + status.slice(1);
  const sizeStyles = getSizeStyles(size);

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: getStatusColor(status),
          paddingHorizontal: sizeStyles.paddingHorizontal,
          paddingVertical: sizeStyles.paddingVertical,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: getStatusTextColor(status),
            fontSize: sizeStyles.fontSize,
          },
        ]}
      >
        {statusLabel}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: '600',
  },
});
