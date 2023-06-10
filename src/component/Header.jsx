import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.viewHead}>
            <Text style={styles.textHead}>Water Echoes</Text>
            <Text style={styles.textNotif}>Notif</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    viewHead: {
        // backgroundColor: '#00A6FB',
        backgroundColor: '#00A6FB',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 7,
        paddingBottom: 160,
    },
    textHead: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFFFF',

    },
    textNotif: {
        fontStyle: 'italic',
        marginLeft: 'auto',
        fontSize: 20,
        color: '#FFFFFF'
    }
})