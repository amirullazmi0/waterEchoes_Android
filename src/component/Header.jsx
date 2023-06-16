import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Header = () => {
    const [notif, setNotif] = useState(false)

    const renderNotif = () => {
        setNotif(true)
    }
    return (
        <>
            <StatusBar backgroundColor="#00A6FB" />
            <View style={styles.viewHead}>
                <Text style={styles.textHead}>Water Echoes</Text>
                <TouchableOpacity style={styles.Notif} onPress={() => renderNotif()}>
                    <Icon name="bell" style={styles.textNotif} />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    viewHead: {
        // backgroundColor: '#00A6FB',
        backgroundColor: '#00A6FB',
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 160,
    },
    textHead: {
        fontStyle: 'italic',
        marginRight: 'auto',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFFFF',

    },
    Notif: {
        fontStyle: 'italic',
        marginLeft: 'auto',
        fontSize: 20,
        color: '#FFFFFF'
    },
    textNotif: {
        fontStyle: 'italic',
        marginLeft: 'auto',
        fontSize: 20,
        color: '#FFFFFF'
    }
})