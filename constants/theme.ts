/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// Gradient primary colors
const primaryGradientStart = '#56D9D4';
const primaryGradientEnd = '#CE32CC';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: primaryGradientStart,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: primaryGradientStart,
    card: '#f8f9fa',
    border: '#e9ecef',
    surface: '#ffffff',
  },
  dark: {
    text: '#FFFFFF',
    background: '#1C1C1E',
    tint: primaryGradientStart,
    icon: '#A0A0A0',
    tabIconDefault: '#A0A0A0',
    tabIconSelected: primaryGradientStart,
    card: '#2C2C2E',
    border: '#3A3A3C',
    surface: '#1C1C1E',
    secondaryText: '#A0A0A0',
    tabBarBackground: '#1A1A1A',
  },
  gradient: {
    primary: [primaryGradientStart, primaryGradientEnd] as const,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
