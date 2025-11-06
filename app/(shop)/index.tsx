import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { getProducts } from '@/lib/api-client';
import { ProductCard } from '@/components/ProductCard';

export default function ShopScreen() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('newest');

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, searchQuery, selectedSort]);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortProducts = () => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedSort === 'priceLow') {
      filtered.sort((a, b) => {
        const priceA = a.variants[0]?.prices[0]?.amount || 0;
        const priceB = b.variants[0]?.prices[0]?.amount || 0;
        return priceA - priceB;
      });
    } else if (selectedSort === 'priceHigh') {
      filtered.sort((a, b) => {
        const priceA = a.variants[0]?.prices[0]?.amount || 0;
        const priceB = b.variants[0]?.prices[0]?.amount || 0;
        return priceB - priceA;
      });
    }

    setFilteredProducts(filtered);
  };

  const sortOptions = [
    { id: 'newest', label: 'Newest' },
    { id: 'priceLow', label: 'Price: Low to High' },
    { id: 'priceHigh', label: 'Price: High to Low' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Shop</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Sort Options */}
        <View style={styles.sortContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          >
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.sortButton,
                  selectedSort === option.id && styles.sortButtonActive,
                ]}
                onPress={() => setSelectedSort(option.id)}
              >
                <Text
                  style={[
                    styles.sortButtonText,
                    selectedSort === option.id &&
                      styles.sortButtonTextActive,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Products Grid */}
        <View style={styles.productsSection}>
          {loading ? (
            <ActivityIndicator size="large" color="#A855F7" />
          ) : (
            <FlatList
              data={filteredProducts}
              numColumns={2}
              renderItem={({ item }) => <ProductCard product={item} />}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    borderRadius: 8,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#F9FAFB',
    color: '#1F2937',
  },
  sortContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  sortButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    marginRight: 8,
    backgroundColor: '#FFFFFF',
  },
  sortButtonActive: {
    backgroundColor: '#A855F7',
    borderColor: '#A855F7',
  },
  sortButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
  sortButtonTextActive: {
    color: '#FFFFFF',
  },
  productsSection: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
});
