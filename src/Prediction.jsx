import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import React, { useState } from 'react'
import CardTable from './component/CardTable'
import HeaderTable from './component/HeaderTable'

export default function Prediction() {
    return (
        <View style={styles.body}>
            <ScrollView style={styles.viewScroll}>
                <HeaderTable />
                <View style={styles.viewMain}>
                    <CardTable />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        // backgroundColor: '#00A6FB',
        backgroundColor: '#edf2fb',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        width: '100%',
        padding: 0,
    },
    viewScroll: {
        width: '100%',
        // height: '90%',
    },
    viewMain: {
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 7,
        height: '100%',
        width: '100%',
    },
})