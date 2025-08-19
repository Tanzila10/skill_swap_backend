import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';
import React, { useRef, useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

type RootStackParamList = {
  VerifyOtp: { email: string };
};

const VerifyOtpScreen = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const inputsRef = useRef<Array<TextInput | null>>([]);
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'VerifyOtp'>>();
  const email = route.params?.email || '';

  const backendUrl = Constants?.expoConfig?.extra?.API_URL || 'http://localhost:5000';

  const handleOtpChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }

      if (newOtp.every((digit) => digit !== '')) {
        verifyOtp(newOtp.join(''));
      }
    }
  };

  const verifyOtp = async (finalOtp: string) => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`${backendUrl}/api/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: finalOtp }),
      });

      const data = await res.json();

      if (res.ok) {
        Alert.alert('Success', 'OTP Verified');
        navigation.navigate('ResetPassword' as never, { email } as never);
      } else {
        setMessage(data.message || 'Invalid OTP');
      }
    } catch (err) {
      setMessage('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`${backendUrl}/api/resend-verification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(res.ok ? 'OTP resent successfully!' : data.message || 'Failed to resend');
    } catch (err) {
      setMessage('Something went wrong');
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
        <Text style={styles.title}>Confirm your email</Text>
        <Text style={styles.subtitle}>
          We’ve sent a 6-digit OTP to your email. Please enter it below to verify your account.
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputsRef.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleResend} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? 'Sending...' : 'Resend OTP'}</Text>
        </TouchableOpacity>

        {message !== '' && <Text style={styles.message}>{message}</Text>}
      </View>
    </KeyboardAvoidingView>
  );
};

export default VerifyOtpScreen;

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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 8,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#f1eeff',
    textAlign: 'center',
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#F35A30',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  message: {
    marginTop: 12,
    textAlign: 'center',
    color: '#060A49',
  },
});
