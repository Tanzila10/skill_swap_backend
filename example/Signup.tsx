// app/signup.tsx

import { useNavigation } from '@react-navigation/native'; // ✅ import navigation hook
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type { RootStackParamList } from '../types/navigation'; // ✅ create if not yet created

export default function SignupScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async () => {
    setError('');

    if (form.password !== form.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const res = await fetch('http://localhost:8000/api/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Signup failed');
        return;
      }

      Alert.alert('Success', 'Account created! Please log in.');
      navigation.navigate('Login'); // ✅ navigate to login screen
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.title}>Sign up</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Name"
          onChangeText={(value) => handleChange('name', value)}
          value={form.name}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(value) => handleChange('email', value)}
          value={form.email}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="************"
          secureTextEntry
          onChangeText={(value) => handleChange('password', value)}
          value={form.password}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="************"
          secureTextEntry
          onChangeText={(value) => handleChange('confirmPassword', value)}
          value={form.confirmPassword}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('Login')} style={styles.link}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7FF',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#060A49',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#060A49',
    marginBottom: 4,
    marginTop: 12,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#f1eeff',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#F35A30',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    marginTop: 15,
    color: '#4239A5',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#4239A5',
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginTop: 8,
  },
});
