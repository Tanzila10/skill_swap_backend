// app/add-skill.tsx

import { useRouter } from 'expo-router';
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

export default function AddSkillScreen() {
  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    level: 'Beginner',
    lookingFor: '',
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleLevelSelect = (level: string) => {
    setForm({ ...form, level });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://<YOUR_BACKEND_URL>/api/add-skill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          userId: '6877a2e61df553f529cb4de3', // TODO: Replace with real user ID from auth context
        }),
      });

      const data = await res.json();

      if (res.ok) {
        Alert.alert('Success', 'Skill added successfully!');
        // router.push('/my-skills'); // Navigate to the skill list screen
      } else {
        Alert.alert('Error', data.message || 'Something went wrong.');
      }
    } catch (err) {
      Alert.alert('Error', 'Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Skills</Text>

      {/* Basic Information */}
      <Text style={styles.sectionTitle}>Basic Information</Text>
      <Text style={styles.label}>Skill Title*</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g., Logo Design, Guitar Lessons"
        value={form.title}
        onChangeText={(text) => handleChange('title', text)}
      />

      <Text style={styles.label}>Category*</Text>
      <TextInput
        style={styles.input}
        placeholder="Select a Category"
        value={form.category}
        onChangeText={(text) => handleChange('category', text)}
      />

      {/* About Skill */}
      <Text style={styles.sectionTitle}>About your skill</Text>
      <Text style={styles.label}>Description*</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Describe your skill, experience, and what you offer..."
        multiline
        numberOfLines={4}
        value={form.description}
        onChangeText={(text) => handleChange('description', text)}
      />

      <Text style={styles.label}>Experience Level</Text>
      <View style={styles.levelContainer}>
        {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              styles.levelButton,
              form.level === level && styles.levelSelected,
            ]}
            onPress={() => handleLevelSelect(level)}
          >
            <Text
              style={[
                styles.levelText,
                form.level === level && styles.levelTextSelected,
              ]}
            >
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Exchange Preferences */}
      <Text style={styles.sectionTitle}>Exchange Preferences</Text>
      <Text style={styles.label}>Skills I’m looking for</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., UI Design, Cooking"
        value={form.lookingFor}
        onChangeText={(text) => handleChange('lookingFor', text)}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={styles.submitText}>
          {loading ? 'Submitting...' : 'Add Skill'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#EDE7FF',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    color: '#060A49',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#060A49',
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 4,
  },
  label: {
    color: '#060A49',
    marginTop: 12,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#f1eeff',
    padding: 10,
    borderRadius: 8,
    marginTop: 4,
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  levelButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#EDE7FF',
  },
  levelSelected: {
    backgroundColor: '#4239A5',
  },
  levelText: {
    color: '#4239A5',
    fontWeight: '500',
  },
  levelTextSelected: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#F35A30',
    padding: 12,
    borderRadius: 8,
    marginTop: 24,
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
