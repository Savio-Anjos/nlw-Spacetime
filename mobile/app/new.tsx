/* eslint-disable prettier/prettier */
import { Text, View } from 'react-native'
import Icon from '@expo/vector-icons/Feather'

import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { Link } from 'expo-router'
import { Switch, TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'

export default function NewMemory() {
    const { bottom, top } = useSafeAreaInsets()

    const [isPublic, setIspublic] = useState(false)

    return (
        <View
            className="flex-1 px-8"
            style={{ paddingBottom: bottom, paddingTop: top }}
        >
            <View className="mt-4 flex-row items-center justify-between">
                <NLWLogo />

                <Link href="/memories" asChild>
                    <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
                        <Icon name="arrow-left" size={16} color="#FFF" />
                    </TouchableOpacity>
                </Link>
            </View>

            <View className="mt-6 space-y-6">
                <View className="flex-row items-center gap-2">
                    <Switch
                        value={isPublic}
                        onValueChange={setIspublic}
                        trackColor={{ false: "#767577", true: "#372560" }}
                        thumbColor={isPublic ? '#9b79ea' : "#9e9ea0"}
                    />
                    <Text className='font-body text-base text-gray-200'>
                        Tornar memória pública
                    </Text>
                </View>
            </View>
        </View>
    )
}
