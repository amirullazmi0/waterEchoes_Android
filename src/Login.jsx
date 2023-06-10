import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Navigation from './Navigation'


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={styles.body}>
            {/* <Image source={require('./my-icon.png')} /> */}
            <View style={styles.viewForm}>
                <Text style={styles.textLogin}>Sign In</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Your Email'
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder='Your Password'
                />
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate("Navbar")}
                >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewFooter}>
                <Text style={styles.textFooter}>
                    WEON 1.0 v
                </Text>
            </View>
        </View>
    );
}
export default function Login() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Navbar"
                    component={Navigation}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#00A6FB',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 0,
    },
    viewForm: {
        marginTop: 'auto',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
    },
    textLogin: {
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold',
        width: '100%',
        fontSize: 30
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'white',
        margin: 10,
        height: 55,
        width: "100%",
        padding: 20,
    },
    btnLogin: {
        backgroundColor: '#FFC300',
        marginTop: 10,
        padding: 10,
        borderRadius: 15,
        width: '50%',
        alignItems: 'center',
    },
    btnText: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
    },
    viewFooter: {
        padding: 10,
        marginTop: 'auto',
    },
    textFooter: {
        color: 'white'
    }
});