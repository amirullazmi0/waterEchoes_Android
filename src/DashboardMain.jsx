import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import React, { useState, useEffect } from 'react'


import Card from './component/Card'
import Header from './component/Header'



const DashboardMain = () => {
    return (
        <View style={styles.viewMain}>
            <ScrollView>
                <Header />
                <View style={styles.viewScroll}>
                    <View style={styles.viewSensor}>
                        <Card />
                    </View>
                    <View style={styles.viewGraph}>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DashboardMain

const styles = StyleSheet.create({
    body: {
        // backgroundColor: '#00A6FB',
        backgroundColor: '#edf2fb',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        padding: 0,
    },
    viewMain: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    viewScroll: {
        // padding: 10,
        flexDirection: 'column',
    },
    viewSensor: {
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: -80,
        marginBottom: 20,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
    },
    viewGraph: {
        width: '100%',
        padding: 10,
        paddingTop: 30,
        paddingBottom: 600,
        marginTop: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // backgroundColor: '#003554'
        backgroundColor: '#d7e3fc'
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
})