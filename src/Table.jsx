import {
    View,
    StyleSheet,
} from 'react-native'
import React, { useState } from 'react'
import CardTable from './component/CardTable'
import HeaderTable from './component/HeaderTable'

export default function Table() {
    return (
        <View style={styles.body}>
            <HeaderTable />
            <View style={styles.viewMain}>
                <CardTable />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        // backgroundColor: '#00A6FB',
        backgroundColor: '#edf2fb',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        height: '90%',
        width: '100%',
        padding: 0,
    },
    viewMain: {
        flexDirection: 'column',
        width: '90%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 7,
        paddingBottom: 7,
    },
    viewScroll: {
        flexDirection: 'row',
        gap: 10,
    },
})