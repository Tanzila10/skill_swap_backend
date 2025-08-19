import { Redirect, Stack } from 'expo-router';
import React from 'react';

import { AuthProvider } from '@/context/AuthContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useState } from 'react';


export default function TabLayout() {
  const colorScheme = useColorScheme();
   const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthProvider>
      {/* Automatically redirect to /signup when user visits root */}
      <Redirect href="/Signup" />
      
      {/* Stack navigation still needed for navigation to work */}
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //     tabBarButton: HapticTab,
    //     tabBarBackground: TabBarBackground,
    //     tabBarStyle: Platform.select({
    //       ios: {
    //         // Use a transparent background on iOS to show the blur effect
    //         position: 'absolute',
    //       },
    //       default: {},
    //     }),
    //   }}>

        
      // {/* {[
      //   { icon: "house.fill", label: 'Home', screen: 'Home' },
      //   { icon: 'paperplane.fill', label: 'Swap', screen: 'Swap' },
      //   { icon: 'envelope.fill', label: 'Messages', screen: 'conversations' },
      //   { icon: 'person.fill', label: 'Profile', screen: 'Profile' },
      // ].map((item, idx) => (
      //   <Tabs.Screen
      //     key={idx}
      //     name={item.screen}
      //     options={{
      //       title: item.label,
      //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
      //     }}
      //   />
      // ))} */}
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="swap"
    //     options={{
    //       title: 'Swap',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="arrow.left.arrow.right.circle.fill" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="conversations"
    //     options={{
    //       title: 'Messages',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="envelope.fill" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="profile"
    //     options={{
    //       title: 'Profile',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
    //     }}
    //   />
    // </Tabs>
  );
}
