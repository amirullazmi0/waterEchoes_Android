import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from 'react'

import Dashboard from './Dashboard'
import Table from './Table'
import Profil from './Profil'
import Icon, { FA5Style } from 'react-native-vector-icons/FontAwesome5'

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
        <View style={styles.body}>
            {active == 'dashboard' && <Dashboard />}
            {active == 'table' && <Table />}
            {active == 'profil' && <Profil />}
            <View style={styles.viewNav}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={styles.navItem}
                >
                    <Icon style={styles.navText} name={"exclamation"} size={22} light />
                </TouchableOpacity>
                <TouchableOpacity
                    style={active == 'prediction' ? [styles.navItem, styles.navActive] : [styles.navItem]}
                    onPress={() => navActive('prediction')}>
                    {active == 'prediction' ?
                        <Icon style={styles.navTextActive} name={"tree"} size={22} />
                        :
                        <Icon style={styles.navText} name={"tree"} size={22} />
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={active == 'dashboard' ? [styles.navItem, styles.navActive] : [styles.navItem]}
                    onPress={() => navActive('dashboard')}>
                    {active == 'dashboard' ?
                        <Icon style={styles.navTextActive} name={"water"} size={22} />
                        :
                        <Icon style={styles.navText} name={"water"} size={22} />
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={active == 'table' ? [styles.navItem, styles.navActive] : [styles.navItem]}
                    onPress={() => navActive('table')}>
                    {active == 'table' ?
                        <Icon style={styles.navTextActive} name={"table"} size={22} />
                        :
                        <Icon style={styles.navText} name={"table"} size={22} />
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={active == 'profil' ? [styles.navItem, styles.navActive] : [styles.navItem]}
                    onPress={() => navActive('profil')}>
                    {active == 'profil' ?
                        <Icon style={styles.navTextActive} name={"user"} size={22} />
                        :
                        <Icon style={styles.navText} name={"user"} size={22} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function Navigation() {
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
        // backgroundColor: '#00A6FB',
        backgroundColor: '#edf2fb',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 0,
    },
    viewNav: {
        marginTop: 'auto',
        height: '9%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    navItem: {
        // backgroundColor: '#00A6FB',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        // top: -40,
    },
    navActive: {
        // backgroundColor: '#00A6FB',
        // padding: 5,
    },
    navText: {
        color: '#00A6FB',
        textAlign: 'center',
        top: 7,
        width: 35,
        height: 35,
        // fontSize: 20
    },
    navTextActive: {
        color: '#00A6FB',
        textAlign: 'center',
        borderBottomColor: '#00A6FB',
        borderBottomWidth: 1,
        width: 35,
        height: 35,
        // fontSize: 20
    },
})