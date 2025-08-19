import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type User = {
  name: string;
  primarySkill: string;
  title: string;
  description: string;
  experienceLevel: string;
  lookingFor: string;
  rating: number;
};

const ProfileScreen = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const backendUrl = Constants?.expoConfig?.extra?.API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/profile`);
        const data = await res.json();
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${backendUrl}/api/logout`, { method: 'POST' });
      // clear AsyncStorage or token if needed
      navigation.reset({ index: 0, routes: [{ name: 'Login' as never }] });
    } catch (error) {
      Alert.alert('Logout Failed', 'Something went wrong.');
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#060A49" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Failed to load user profile.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <View style={styles.section}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.skill}>{user.primarySkill}</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{user.title}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>About My Skill</Text>
        <Text style={styles.text}>{user.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Experience Level</Text>
        <Text style={styles.text}>{user.experienceLevel}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Skills I’m Looking For</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{user.lookingFor}</Text>
        </View>
      </View>

      <View style={[styles.section, { flexDirection: 'row' }]}>
        {[1, 2, 3, 4, 5].map((i) => (
          <FontAwesome
            key={i}
            name="star"
            size={24}
            color={i <= user.rating ? '#060A49' : '#ccc'}
            style={{ marginRight: 4 }}
          />
        ))}
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.swapButton}>
          <Text style={styles.swapButtonText}>Request Swap</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D2FF',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#060A49',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#060A49',
  },
  skill: {
    color: '#060A49',
    fontSize: 16,
    marginBottom: 4,
  },
  tag: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  tagText: {
    color: '#060A49',
    fontSize: 14,
  },
  subheading: {
    color: '#060A49',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  text: {
    color: '#060A49',
    fontSize: 14,
  },
  swapButton: {
    backgroundColor: '#F35A30',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  swapButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: '#060A49',
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 40,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#060A49',
    fontWeight: '600',
    fontSize: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D2FF',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
