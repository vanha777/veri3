import { AppText } from '@/components/app-text'
import { AppView } from '@/components/app-view'
import { useWalletUi } from '@/components/solana/use-wallet-ui'
import { useThemeColor } from '@/hooks/use-theme-color'
import { ellipsify } from '@/utils/ellipsify'
import { Button } from '@react-navigation/elements'
import { PublicKey } from '@solana/web3.js'
import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { ActivityIndicator, Platform, TextInput, View } from 'react-native'

// Conditionally import Snackbar only on mobile platforms
let Snackbar: any = null
if (Platform.OS === 'android' || Platform.OS === 'ios') {
  try {
    Snackbar = require('react-native-snackbar').default
  } catch (error) {
    console.log('Snackbar not available on this platform')
  }
}

function useSignMessage({ address }: { address: PublicKey }) {
  const { signMessage } = useWalletUi()
  return useMutation({
    mutationFn: async (input: { message: string }) => {
      return signMessage(Buffer.from(input.message, 'utf8')).then((signature) => signature.toString())
    },
  })
}

export function DemoFeatureSignMessage({ address }: { address: PublicKey }) {
  const signMessage = useSignMessage({ address })
  const [message, setMessage] = useState('Hello world')
  const backgroundColor = useThemeColor({ light: '#f0f0f0', dark: '#333333' }, 'background')
  const textColor = useThemeColor({ light: '#000000', dark: '#ffffff' }, 'text')

  return (
    <AppView>
      <AppText type="subtitle">Sign message with connected wallet.</AppText>

      <View style={{ gap: 16 }}>
        <AppText>Message</AppText>
        <TextInput
          style={{
            backgroundColor,
            color: textColor,
            borderWidth: 1,
            borderRadius: 25,
            paddingHorizontal: 16,
          }}
          value={message}
          onChangeText={setMessage}
        />
        {signMessage.isPending ? (
          <ActivityIndicator />
        ) : (
          <Button
            disabled={signMessage.isPending || message?.trim() === ''}
            onPress={() => {
              signMessage
                .mutateAsync({ message })
                .then(() => {
                  console.log(`Signed message: ${message} with ${address.toString()}`)
                  // Only show Snackbar if it's available (mobile platforms)
                  if (Snackbar) {
                    Snackbar.show({
                      text: `Signed message with ${ellipsify(address.toString(), 8)}`,
                      duration: Snackbar.LENGTH_SHORT,
                    })
                  }
                })
                .catch((err) => console.log(`Error signing message: ${err}`, err))
            }}
            variant="filled"
          >
            Sign Message
          </Button>
        )}
      </View>
      {signMessage.isError ? (
        <AppText style={{ color: 'red', fontSize: 12 }}>{`${signMessage.error.message}`}</AppText>
      ) : null}
    </AppView>
  )
}
