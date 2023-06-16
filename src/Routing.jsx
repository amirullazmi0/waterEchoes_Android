import {
    StyleSheet,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Navbar from './component/Navbar'
import DashboardMain from './DashboardMain'
import Profil from './Profil'
import Prediction from './Prediction'
import Calibrate from './Calibrate'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeScreen({ navigation }) {
    const handleData = (data) => {
        if (data === 'prediction') {
            navigation.navigate("prediction")
        }
        if (data === 'dashboard') {
            navigation.navigate("dashboard")
        }
        if (data === 'calibrate') {
            navigation.navigate("calibrate")
        }
        if (data === 'profil') {
            navigation.navigate("profil")
        }
        console.log('Received data from Navbar:', data);
    };
    return (
        <>
            <DashboardMain />
            <Navbar act={'dashboard'} sendData={handleData} />
        </>
    )
}

function PredictionScreen({ navigation }) {
    const handleData = (data) => {
        if (data === 'prediction') {
            navigation.navigate("prediction")
        }
        if (data === 'dashboard') {
            navigation.navigate("dashboard")
        }
        if (data === 'calibrate') {
            navigation.navigate("calibrate")
        }
        if (data === 'profil') {
            navigation.navigate("profil")
        }
        console.log('Received data from Navbar:', data);
    };
    return (
        <>
            <Prediction />
            <Navbar act={'prediction'} sendData={handleData} />
        </>
    )
}

function ProfilScreen({ navigation }) {
    const handleData = (data) => {
        if (data === 'prediction') {
            navigation.navigate("prediction")
        }
        if (data === 'dashboard') {
            navigation.navigate("dashboard")
        }
        if (data === 'calibrate') {
            navigation.navigate("calibrate")
        }
        if (data === 'profil') {
            navigation.navigate("profil")
        }
        console.log('Received data from Navbar:', data);
    };
    return (
        <>
            <Profil />
            <Navbar act={'profil'} sendData={handleData} />
        </>
    )
}
function CalibrateScreen({ navigation }) {
    const handleData = (data) => {
        if (data === 'prediction') {
            navigation.navigate("prediction")
        }
        if (data === 'dashboard') {
            navigation.navigate("dashboard")
        }
        if (data === 'calibrate') {
            navigation.navigate("calibrate")
        }
        if (data === 'profil') {
            navigation.navigate("profil")
        }
        console.log('Received data from Navbar:', data);
    };
    return (
        <>
            <Calibrate />
            <Navbar act={'dashboard'} sendData={handleData} />
        </>
    )
}

export default function Routing() {
    const handleData = (data) => {
        // setNav('profil')
        console.log('Received data from Navbar:', data);
    };
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="dashboard"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="calibrate"
                        component={CalibrateScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="prediction"
                        component={PredictionScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="profil"
                        component={ProfilScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
                {/* <Tab.Navigator>
                    <Tab.Screen
                        name="prediction"
                        component={PredictionScreen}
                        options={{ headerShown: false }} />
                    <Tab.Screen
                        name="dashboard"
                        component={HomeScreen}
                        options={{ headerShown: false }} />
                    <Tab.Screen
                        name="profil"
                        component={ProfilScreen}
                        options={{ headerShown: false }} />
                </Tab.Navigator> */}
            </NavigationContainer>
            {/* <Navbar sendData={handleData} /> */}
        </>
    );
}

