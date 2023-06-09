import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from './Dashboard'
import Login from './Login'

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Dashboard"
                onPress={() => navigation.navigate("Dashboard")}
            />
        </View>
    );
}

export default function Coba() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Dashboard" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}