import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import React, { useState } from 'react'
import Header from './component/Header'
import Card from './component/Card';

export default function Table() {
    return (
        <>
            <View style={styles.viewMain}>
                <ScrollView>
                    <Header />
                    <View style={styles.viewScroll}>
                        <Text>This Table</Text>
                        {/* <View style={styles.viewSensor}>
                            <Card value={70.9} />
                            <Card value={108.12} />
                            <Card value={32.3} />
                            <Card value={1268.65} />
                            <Card value={357.32} />
                        </View>
                        <View style={styles.viewGraph}>
                        </View> */}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        // backgroundColor: '#00A6FB',
        backgroundColor: '#edf2fb',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 0,
    },
    viewMain: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 10,
        width: '100%',
        // height: '95%',
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
    viewNav: {
        marginTop: 'auto',
        height: '8%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        paddingLeft: 10,
        paddingRight: 10,
        // margin: 10,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // borderColor: '#ffc300',
        // borderTopWidth: 17
    },
    navItem: {
        // backgroundColor: '#00A6FB',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        // top: -40,
    },
    navActive: {
        backgroundColor: '#00A6FB',
        padding: 5,
    },
    navText: {
        color: '#00A6FB',
        fontSize: 20
    },
    textActive: {
        color: '#FFFFFF',
        fontSize: 20
    }
})