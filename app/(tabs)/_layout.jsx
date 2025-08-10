import { View, Text } from 'react-native'
import React from 'react';
import {Tabs} from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons';
const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor:"skyblue",
            tabBarInactiveTintColor: "silver",
            tabBarBackgroundColor: "#41526a",
        }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: "Todos",
                    tabBarIcon: ({ color, size }) => (
                       <Ionicons name="game-controller" size={size} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name='settings'
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => (
                       <Ionicons name="settings" size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabsLayout