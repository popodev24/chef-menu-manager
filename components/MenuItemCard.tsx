import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MenuItem } from '../types';

interface Props {
  item: MenuItem;
}

const COURSE_COLORS: Record<string, string> = {
  Starters: '#E9A93B',
  Mains: '#B5652D',
  Dessert: '#8E6BAA',
};

export default function MenuItemCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.dishName}>{item.dishName}</Text>
        <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View
        style={[
          styles.courseBadge,
          { backgroundColor: COURSE_COLORS[item.course] ?? '#999' },
        ]}
      >
        <Text style={styles.courseText}>{item.course}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dishName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E2A25',
    flexShrink: 1,
    marginRight: 8,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#B5652D',
  },
  description: {
    fontSize: 13,
    color: '#6B6459',
    marginTop: 4,
    lineHeight: 18,
  },
  courseBadge: {
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 8,
  },
  courseText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
});
