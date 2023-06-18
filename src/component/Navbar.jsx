import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Navbar = ({ act, sendData }) => {
    const [active, setActive] = useState(act)

    const navActive = (e) => {
        // sendData(e)
        if (e == 'profil') {
            // setActive('profil')
            sendData('profil')
        }
        if (e == 'dashboard') {
            // setActive('dashboard')
            sendData('dashboard')
        }
        if (e == 'prediction') {
            // setActive('prediction')
            sendData('prediction')
        }
        if (e == 'calibrate') {
            // setActive('prediction')
            sendData('calibrate')
        }
    }

    console.log('active', active);
    return (
        <>
            <View style={styles.viewNav}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navActive('prediction')}>
                    {active == 'prediction' ?
                        <Icon style={styles.navTextActive} name={"tree"} size={22} />
                        :
                        <Icon style={styles.navText} name={"tree"} size={22} />
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navActive('dashboard')}
                    onLongPress={() => navActive('calibrate')}
                >
                    {active == 'dashboard' ?
                        <Icon style={styles.navTextActive} name={"water"} size={22} />
                        :
                        <Icon style={styles.navText} name={"water"} size={22} />
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navActive('profil')}>
                    {active == 'profil' ?
                        <Icon style={styles.navTextActive} name={"user"} size={22} />
                        :
                        <Icon style={styles.navText} name={"user"} size={22} />
                    }
                </TouchableOpacity>
            </View>
        </ >
    );
}

export default Navbar

const styles = StyleSheet.create({
    viewNav: {
        marginTop: 'auto',
        elevation: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        paddingLeft: 40,
        paddingRight: 40,
        height: '10%',
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