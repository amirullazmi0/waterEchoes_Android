import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Card from './component/Card'
import Header from './component/Header'


function HomeScreen({ navigation }) {
    return (
        <View style={styles.body}>
            <Header></Header>
            <View style={styles.viewMain}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.viewSensor}>
                        <View style={styles.viewCard}>
                            <Card />
                        </View>
                        <View style={styles.viewCard}>
                            <Card />
                        </View>
                        <View style={styles.viewCard}>
                            <Card />
                        </View>
                        <View style={styles.viewCard}>
                            <Card />
                        </View>
                        <View style={styles.viewCard}>
                            <Card />
                        </View>
                    </View>
                    <View style={styles.viewGraph}>

                    </View>
                </ScrollView>
            </View>
            <View style={styles.viewNav}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={styles.navItem}
                >
                    <Text style={styles.navText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>Nav</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function Dashboard() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
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
    viewMain: {
        paddingTop: 0,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        width: '100%',
        height: '95%',
    },
    viewSensor: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    viewGraph: {
        height: 200,
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: '#003554'
    },
    viewCard: {
        marginRight: 'auto',
        // width: '48%',
        // flex: 2
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
    viewNav: {
        marginTop: 'auto',
        height: '12%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2,
        paddingLeft: 20,
        paddingRight: 20,
        // margin: 10,
        borderColor: '#ffc300',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderTopWidth: 10
    },
    navItem: {
        // backgroundColor: '#00A6FB',
        borderRadius: 30,
        padding: 20,
        // top: -40,
    },
    navText: {
        color: '#00A6FB',
        fontSize: 20
    }
})