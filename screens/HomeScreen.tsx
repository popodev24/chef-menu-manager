import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMenu } from '../context/MenuContext';
import { MenuItem, RootStackParamList } from '../types';
import MenuItemCard from '../components/MenuItemCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { items } = useMenu();

  const renderItem = ({ item }: { item: MenuItem }) => (
    <MenuItemCard item={item} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Christoffel's Menu</Text>
        <Text style={styles.count}>
          {items.length} {items.length === 1 ? 'item' : 'items'} on the menu
        </Text>
      </View>

      {items.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            No menu items yet -- tap "Manage Menu" below to add your first dish.
          </Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}

      <TouchableOpacity
        style={styles.manageButton}
        onPress={() => navigation.navigate('ManageMenu')}
      >
        <Text style={styles.manageButtonText}>Manage Menu (Add Item)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F2',
    padding: 20,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2E2A25',
  },
  count: {
    fontSize: 14,
    color: '#6B6459',
    marginTop: 4,
  },
  listContent: {
    paddingBottom: 12,
  },
  emptyState: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E3DDD2',
    borderStyle: 'dashed',
  },
  emptyText: {
    color: '#8B8478',
    fontSize: 14,
    textAlign: 'center',
  },
  manageButton: {
    backgroundColor: '#2E2A25',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  manageButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
});
