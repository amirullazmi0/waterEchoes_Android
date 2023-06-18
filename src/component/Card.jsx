import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Card = ({ sensor }) => {
    const [sen, setSen] = useState()
    // useEffect(() => {
    //     setSen(sensor)
    // }, [])
    return (
        <>
            {/* PH */}
            <View style={styles.viewCard}>
                <Text style={styles.textCard}>{sensor.value1}</Text>
                <View style={styles.viewGround}>
                    <Icon name="tint" size={20} />
                </View>
            </View>

            {/* TDS */}
            <View style={styles.viewCard}>
                <Text style={styles.textCard}>{sensor.value2}</Text>
                <View style={styles.viewGround}>
                    {/* <Text>TDS</Text> */}
                    <Icon name="rainbow" light size={20} />
                </View>
            </View>

            {/* SUHU */}
            <View style={styles.viewCard}>
                <Text style={styles.textCard}>{sensor.value3}</Text>
                <View style={styles.viewGround}>
                    <Icon name="thermometer-half" size={20} />
                </View>
            </View>

            {/* SALINITAS */}
            <View style={styles.viewCard}>
                <Text style={styles.textCard}>{sensor.value4}</Text>
                <View style={styles.viewGround}>
                    <Icon name="bolt" size={20} />
                </View>
            </View>

            {/* AMONIA */}
            <View style={styles.viewCard}>
                <Text style={styles.textCard}>{sensor.value5}</Text>
                <View style={styles.viewGround}>
                    <Icon name="virus" size={20} />
                </View>
            </View>
        </>
    )
}

export default Card

const styles = StyleSheet.create({
    viewCard: {
        // padding: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 150,
        width: 150,
        zIndex: 5,
    },
    viewGround: {
        // padding: 10,
        backgroundColor: '#FFD60A',
        marginBottom: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        // borderRadius: 20,
        borderTopLeftRadius: 17,
        borderBottomRightRadius: 17,
        zIndex: 5,
    },
    textGround: {
        textAlign: 'center',
        color: '#edf2fb',
        marginTop: 'auto',
        fontSize: 25,
        fontWeight: 'bold'
    },
    textCard: {
        textAlign: 'center',
        position: 'absolute',
        color: '#006494',
        fontSize: 25,
        fontWeight: 'bold'
    }
})