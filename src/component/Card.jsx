import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const card = () => {
    return (
        <View style={styles.viewCard}>
            <Text style={styles.textCard}> 78.67</Text>
        </View>
    )
}

export default card

const styles = StyleSheet.create({
    viewCard: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 180,
        width: 180
    },
    textCard: {
        textAlign: 'center',
        color: '#006494',
        fontSize: 25,
        fontWeight: 'bold'
    }
})