import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMenu } from '../context/MenuContext';
import { COURSES, Course, RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'ManageMenu'>;

interface FormErrors {
  dishName?: string;
  description?: string;
  price?: string;
}

export default function ManageMenuScreen({ navigation }: Props) {
  const { addItem } = useMenu();

  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<Course>(COURSES[0]);
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!dishName.trim()) {
      newErrors.dishName = 'Dish name is required.';
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required.';
    }

    const priceNumber = Number(price);
    if (!price.trim()) {
      newErrors.price = 'Price is required.';
    } else if (Number.isNaN(priceNumber) || priceNumber <= 0) {
      newErrors.price = 'Enter a valid price greater than 0.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setDishName('');
    setDescription('');
    setCourse(COURSES[0]);
    setPrice('');
    setErrors({});
  };

  const handleAdd = () => {
    if (!validate()) {
      return;
    }

    addItem({
      dishName: dishName.trim(),
      description: description.trim(),
      course,
      price: Number(price),
    });

    resetForm();
    Alert.alert('Added!', `${dishName.trim()} was added to the menu.`);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backLink}>{'< Back to Home'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Manage Menu Items</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Add New Item</Text>

        <Text style={styles.label}>Dish Name</Text>
        <TextInput
          style={[styles.input, errors.dishName && styles.inputError]}
          placeholder="e.g. Seared Scallops"
          value={dishName}
          onChangeText={setDishName}
        />
        {errors.dishName && <Text style={styles.errorText}>{errors.dishName}</Text>}

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.multiline, errors.description && styles.inputError]}
          placeholder="e.g. Pan-seared, citrus butter"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={3}
        />
        {errors.description && (
          <Text style={styles.errorText}>{errors.description}</Text>
        )}

        <View style={styles.row}>
          <View style={styles.rowItem}>
            <Text style={styles.label}>Course</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={course}
                onValueChange={(value) => setCourse(value as Course)}
              >
                {COURSES.map((c) => (
                  <Picker.Item key={c} label={c} value={c} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.rowItem}>
            <Text style={styles.label}>Price (R)</Text>
            <TextInput
              style={[styles.input, errors.price && styles.inputError]}
              placeholder="e.g. 95"
              value={price}
              onChangeText={setPrice}
              keyboardType="decimal-pad"
            />
          </View>
        </View>
        {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}

        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>+ Add Item</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.note}>
        Removing items will be added in the Final PoE.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F2',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  backLink: {
    color: '#B5652D',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2E2A25',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E2A25',
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4A453D',
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D8D2C4',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    backgroundColor: '#FCFBF9',
  },
  multiline: {
    textAlignVertical: 'top',
    minHeight: 70,
  },
  inputError: {
    borderColor: '#C0392B',
  },
  errorText: {
    color: '#C0392B',
    fontSize: 12,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  rowItem: {
    flex: 1,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#D8D2C4',
    borderRadius: 8,
    backgroundColor: '#FCFBF9',
    overflow: 'hidden',
  },
  addButton: {
    backgroundColor: '#2E2A25',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 18,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  note: {
    fontSize: 12,
    color: '#8B8478',
    textAlign: 'center',
    marginTop: 16,
  },
});
