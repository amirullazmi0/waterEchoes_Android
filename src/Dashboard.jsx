import {
    StyleSheet,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Navbar from './component/Navbar'
import Table from './Table'
import DashboardMain from './DashboardMain'

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    const handleData = (data) => {
        if (data == 'table') {
            navigation.navigate("table")
        }
        console.log('Received data from Navbar:', data);
    };
    return (
        <>
            <DashboardMain />
            <Navbar sendData={handleData} />
        </>
    );
}

function TableScreen({ navigation }) {
    const handleData = (data) => {
        if (data == 'table') {
            navigation.navigate("table")
        }
        console.log('Received data from Navbar:', data);
    };
    return (
        <>
            <Table />
            <Navbar sendData={handleData} />
        </>

    )
}

export default function Dashboard({ navigation }) {

    const handleData = (data) => {
        if (data == 'table') {

        }
        console.log('Received data from Navbar:', data);
    };

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Dashboard"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="table"
                        component={TableScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            {/* <Navbar sendData={handleData} /> */}
        </>
    );
}

