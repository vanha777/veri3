import { AppPage } from '@/components/app-page'
import { AppText } from '@/components/app-text'
import { AppView } from '@/components/app-view'
import { DemoFeature } from '@/components/demo/demo-feature'
import React from 'react'
import { Platform } from 'react-native'

export default function TabsDemoScreen() {
  // Check if running on desktop
  const isDesktop = Platform.OS === 'web' || Platform.OS === 'windows' || Platform.OS === 'macos'
  
  if (isDesktop) {
    return (
      <AppPage>
        <AppView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <AppText type="title" style={{ textAlign: 'center', marginBottom: 16 }}>
            Desktop not supported
          </AppText>
          <AppText style={{ textAlign: 'center', color: '#666' }}>
            This demo feature is only available on mobile devices.
            Please use the Android emulator or a physical mobile device.
          </AppText>
        </AppView>
      </AppPage>
    )
  }

  return (
    <AppPage>
      <DemoFeature />
    </AppPage>
  )
}
