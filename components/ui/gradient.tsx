import { Colors } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ColorValue, StyleSheet, ViewStyle } from 'react-native';

interface GradientProps {
  colors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: ViewStyle;
  children?: React.ReactNode;
}

export function Gradient({ 
  colors = Colors.gradient.primary as readonly [ColorValue, ColorValue, ...ColorValue[]], 
  start = { x: 0, y: 0 }, 
  end = { x: 1, y: 0 },
  style,
  children 
}: GradientProps) {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
