import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, Platform, View } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  // Get screen dimensions for responsive tab bar
  const screenWidth = Dimensions.get('window').width;
  
  // Calculate responsive margins and border radius
  const getTabBarMargins = () => {
    const isTablet = screenWidth >= 768;
    const isDesktop = screenWidth >= 1024;
    
    if (isDesktop) {
      return {
        marginHorizontal: Math.max(60, screenWidth * 0.1), // At least 60px or 10% of screen width
        height: 80,
        borderRadius: 40, // More rounded for pill shape
      };
    } else if (isTablet) {
      return {
        marginHorizontal: Math.max(40, screenWidth * 0.08), // At least 40px or 8% of screen width
        height: 75,
        borderRadius: 37, // More rounded for pill shape
      };
    } else {
      return {
        marginHorizontal: Math.max(20, screenWidth * 0.05), // At least 20px or 5% of screen width
        height: 70,
        borderRadius: 35, // More rounded for pill shape
      };
    }
  };

  const tabBarMargins = getTabBarMargins();
  
  // Calculate responsive icon sizes
  const getIconSize = () => {
    const isTablet = screenWidth >= 768;
    const isDesktop = screenWidth >= 1024;
    
    if (isDesktop) {
      return 32;
    } else if (isTablet) {
      return 30;
    } else {
      return 28;
    }
  };

  const iconSize = getIconSize();
  
  // Calculate responsive focused icon container size
  const getFocusedContainerSize = () => {
    const isTablet = screenWidth >= 768;
    const isDesktop = screenWidth >= 1024;
    
    if (isDesktop) {
      return 44;
    } else if (isTablet) {
      return 42;
    } else {
      return 40;
    }
  };

  const focusedContainerSize = getFocusedContainerSize();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: Colors.dark.tabBarBackground,
          borderTopColor: 'transparent',
          borderTopWidth: 0,
          borderRadius: tabBarMargins.borderRadius,
          marginHorizontal: tabBarMargins.marginHorizontal,
          marginBottom: Platform.OS === 'ios' ? 25 : 15,
          height: tabBarMargins.height,
          paddingTop: 8,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 8,
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? Colors.dark.tint : 'transparent',
                borderRadius: 20,
                padding: focused ? 8 : 0,
                width: focused ? focusedContainerSize : 'auto',
                height: focused ? focusedContainerSize : 'auto',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconSymbol 
                size={iconSize} 
                name={focused ? "house.fill" : "house"} 
                color={focused ? '#FFFFFF' : '#FFFFFF'} 
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? Colors.dark.tint : 'transparent',
                borderRadius: 20,
                padding: focused ? 8 : 0,
                width: focused ? focusedContainerSize : 'auto',
                height: focused ? focusedContainerSize : 'auto',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconSymbol 
                size={iconSize} 
                name={focused ? "paperplane.fill" : "paperplane"} 
                color={focused ? '#FFFFFF' : '#FFFFFF'} 
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
