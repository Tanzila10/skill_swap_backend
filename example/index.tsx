import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const TABS = ['Preference', 'All', 'Music', 'Programming'];

const DiscoverSkillsScreen = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(`http://<YOUR_BACKEND_URL>/api/skills?category=${activeTab}`);
        const data = await res.json();
        setSkills(data.skills || []);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, [activeTab]);

  const renderSkillCard = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.username}>{item?.userId?.name || 'Unknown'}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <Text style={styles.skillTitle}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.lookingFor}>
        Looking for:{' '}
        <Text style={styles.lookingSkill}>{item.lookingFor}</Text>
      </Text>
      <View style={styles.ratingRow}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Text key={i} style={i <= item.rating ? styles.starActive : styles.starInactive}>
            ★
          </Text>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.pageTitle}>Discover Skills</Text>

      {/* Search */}
      <View style={styles.searchRow}>
        <TextInput
          placeholder="Search skills or users..."
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabs}>
        {TABS.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.tabItem}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Skill Cards */}
      <FlatList
        data={skills}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderSkillCard}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        {[
          { icon: '🏠', label: 'Home', screen: 'Home' },
          { icon: '🔁', label: 'Swap', screen: 'Swap' },
          { icon: '✉️', label: 'Messages', screen: 'Messages' },
          { icon: '👤', label: 'Profile', screen: 'Profile' },
        ].map((item, idx) => (
          <TouchableOpacity key={idx} onPress={() => navigation.navigate(item.screen as never)}>
            <View style={styles.navItem}>
              <Text style={styles.navIcon}>{item.icon}</Text>
              <Text style={styles.navLabel}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DiscoverSkillsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7FF',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  pageTitle: {
    fontSize: 24,
    color: '#060A49',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  searchRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
  },
  tabs: {
    flexGrow: 0,
    marginBottom: 12,
  },
  tabItem: {
    marginRight: 20,
  },
  tabText: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#4239A5',
    borderBottomWidth: 2,
    borderColor: '#4239A5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    color: '#F35A30',
    fontWeight: 'bold',
  },
  category: {
    backgroundColor: '#EDE7FF',
    color: '#4239A5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    fontSize: 12,
  },
  skillTitle: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#060A49',
  },
  description: {
    fontSize: 14,
    color: '#060A49',
    marginTop: 4,
  },
  lookingFor: {
    marginTop: 8,
    color: '#060A49',
    fontWeight: '600',
  },
  lookingSkill: {
    backgroundColor: '#f1eeff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    marginTop: 6,
  },
  starActive: {
    color: '#4239A5',
    marginRight: 2,
  },
  starInactive: {
    color: '#ccc',
    marginRight: 2,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 18,
  },
  navLabel: {
    fontSize: 12,
    color: '#4239A5',
    marginTop: 2,
  },
});
