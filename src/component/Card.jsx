import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const card = ({ value }) => {
    return (
        <View style={styles.viewCard}>
            <Text style={styles.textCard}>{value}</Text>
        </View>
    )
}

export default card

const styles = StyleSheet.create({
    viewCard: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 150,
        width: 150
    },
    textCard: {
        textAlign: 'center',
        color: '#006494',
        fontSize: 25,
        fontWeight: 'bold'
    }
})