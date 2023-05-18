import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="font-body text-5xl text-gray-50">Rocketseat</Text>
      <Text className="font-alt text-5xl text-gray-50">Rocketseat</Text>

      <StatusBar style="light" translucent />
    </View>
  )
}
