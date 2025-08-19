import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

type RootStackParamList = {
  ResetPassword: { token: string };
};

export default function ResetPasswordScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'ResetPassword'>>();
  const navigation = useNavigation();
  const token = route.params?.token;

  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const backendUrl = Constants?.expoConfig?.extra?.API_URL || 'http://localhost:5000';

  const handleChange = (key: 'password' | 'confirmPassword', value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async () => {
    setError('');
    setMessage('');

    if (form.password !== form.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${backendUrl}/api/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password: form.password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Reset failed');
      } else {
        setMessage('Password updated successfully!');
        setTimeout(() => navigation.navigate('Login' as never), 2000);
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Create Password</Text>
        <Text style={styles.subtitle}>
          Your new password must be different from previously used password
        </Text>

        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={form.password}
            onChangeText={(text) => handleChange('password', text)}
            placeholder="************"
            secureTextEntry
            style={styles.input}
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            value={form.confirmPassword}
            onChangeText={(text) => handleChange('confirmPassword', text)}
            placeholder="************"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {error !== '' && <Text style={styles.error}>{error}</Text>}
        {message !== '' && <Text style={styles.success}>{message}</Text>}

        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.button}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Saving...' : 'Save'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7FF',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#060A49',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#4239A5',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: '600',
    color: '#060A49',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#f1eeff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#F35A30',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 8,
  },
  success: {
    color: 'green',
    textAlign: 'center',
    marginBottom: 8,
  },
});
