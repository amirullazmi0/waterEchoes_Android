import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import Dashboard from '../Dashboard'

function HomeScreen({ navigation }) {
    const [active, setActive] = useState('dashboard')
    const navActive = (e) => {
        if (e == 'profil') {
            setActive('profil')
        } else if (e == 'dashboard') {
            setActive('dashboard')
        } else if (e == 'table') {
            setActive('table')
        } else if (e == 'prediction') {
            setActive('prediction')
        } else if (e == 'action') {
            setActive('action')
        }
    }
    return (
        <View style={styles.viewNav}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={styles.navItem}
            >
                <Text style={styles.navText}>T</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={active == 'prediction' ? [styles.navItem, styles.navActive] : [styles.navItem]}
                onPress={() => navActive('prediction')}>
                <Text style={active == 'prediction' ? [styles.navText, styles.textActive] : [styles.navText]}>P</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={active == 'dashboard' ? [styles.navItem, styles.navActive] : [styles.navItem]}
                onPress={() => navActive('dashboard')}>
                <Text style={active == 'dashboard' ? [styles.navText, styles.textActive] : [styles.navText]}>H</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={active == 'action' ? [styles.navItem, styles.navActive] : [styles.navItem]}
                onPress={() => navActive('action')}>
                <Text style={active == 'action' ? [styles.navText, styles.textActive] : [styles.navText]}>T</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={active == 'profil' ? [styles.navItem, styles.navActive] : [styles.navItem]}
                onPress={() => navActive('profil')}>
                <Text style={active == 'profil' ? [styles.navText, styles.textActive] : [styles.navText]}>P</Text>
            </TouchableOpacity>
        </View>
    );
}

const Stack = createNativeStackNavigator();

const Navbar = ({ navigation }) => {
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

export default Navbar

const styles = StyleSheet.create({
    viewNav: {
        marginTop: 'auto',
        height: '8%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        paddingLeft: 10,
        paddingRight: 10,
        // margin: 10,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // borderColor: '#ffc300',
        // borderTopWidth: 17
    },
    navItem: {
        // backgroundColor: '#00A6FB',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        // top: -40,
    },
    navActive: {
        backgroundColor: '#00A6FB',
        padding: 5,
    },
    navText: {
        color: '#00A6FB',
        fontSize: 20
    },
    textActive: {
        color: '#FFFFFF',
        fontSize: 20
    }
})