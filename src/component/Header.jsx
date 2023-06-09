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
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        width: '100%',
        // height: '7%',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 7,
        paddingBottom: 7,
        borderBottomColor: '#0582CA',
        borderBottomWidth: 1,
        shadowColor: 'black',
    },
    textHead: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#00A6FB'
    },
    textNotif: {
        fontStyle: 'italic',
        marginLeft: 'auto',
        fontSize: 20,
        color: '#00A6FB'
    }
})