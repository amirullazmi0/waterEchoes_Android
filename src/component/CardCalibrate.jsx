import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const CardCalibrate = () => {
    const [nav, setNav] = useState('ph')
    const [index1, setIndex1] = useState()
    const [index2, setIndex2] = useState()
    const [index3, setIndex3] = useState()

    const handleNav = (e) => {
        setNav(e)
        setIndex1('')
        setIndex2('')
        setIndex3('')
    }

    const handleIndex1 = (e) => {
        setIndex1(e)
    }
    const handleIndex2 = (e) => {
        setIndex2(e)
    }
    const handleIndex3 = (e) => {
        setIndex3(e)
    }

    const handleCalibrate = () => {
        data = { index1, index2, index3 }
        console.log('data', data);
    }
    return (
        <>
            <View style={styles.viewCardNav}>
                <TouchableOpacity
                    style={nav == 'ph' ? styles.viewNavActive : styles.viewNavItem}
                    onPress={() => handleNav('ph')}
                >
                    <Text style={styles.textNav}>PH</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={nav == 'tds' ? styles.viewNavActive : styles.viewNavItem}
                    onPress={() => handleNav('tds')}>
                    <Text style={styles.textNav}>TDS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={nav == 'term' ? styles.viewNavActive : styles.viewNavItem}
                    onPress={() => handleNav('term')}>
                    <Text style={styles.textNav}>Term</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={nav == 'sal' ? styles.viewNavActive : styles.viewNavItem}
                    onPress={() => handleNav('sal')}>
                    <Text style={styles.textNav}>Sal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={nav == 'amo' ? styles.viewNavActive : styles.viewNavItem}
                    onPress={() => handleNav('amo')}>
                    <Text style={styles.textNav}>Amo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewCard}>
                <View style={styles.viewForm}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 20, }}>1</Text>
                        <TextInput
                            placeholder='value index'
                            style={styles.textInput}
                            value={index1}
                            onChangeText={handleIndex1}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 20, }}>2</Text>
                        <TextInput
                            placeholder='value index'
                            style={styles.textInput}
                            value={index2}
                            onChangeText={handleIndex2}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 20, }}>3</Text>
                        <TextInput
                            placeholder='value index'
                            style={styles.textInput}
                            value={index3}
                            onChangeText={handleIndex3}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={[styles.btnGrey, { marginTop: 20, marginBottom: 10, }]}
                    onPress={() => handleCalibrate()}
                >
                    <Text>Calibrate</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CardCalibrate

const styles = StyleSheet.create({
    viewCardNav: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 7,
        padding: 15,
        paddingLeft: 15,
        paddingRight: 15,
        width: '90%',
        marginBottom: 10,
    },
    viewNavItem: {
        backgroundColor: '#f9f9f9',
        borderRadius: 7,
        width: '19%',
        padding: 10,
    },
    viewNavActive: {
        backgroundColor: '#FFD60A',
        borderRadius: 7,
        width: '19%',
        padding: 10,
    },
    viewForm: {
        flexDirection: 'column',
        gap: 20,
    },
    textNav: {
        textAlign: 'center',
    },
    viewCard: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        borderRadius: 7,
        width: '90%',
        padding: 15,
        // height: 450,
        marginBottom: 10,
    },
    viewCardHead: {
        backgroundColor: '#FFD60A',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 20,
        zIndex: 5,
    },
    textGround: {
        textAlign: 'center',
        color: '#979dac',
        fontSize: 200,
        fontWeight: 'bold'
    },
    textCard: {
        textAlign: 'center',
        color: '#006494',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor: '#f9f9f9',
        flex: 1,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    btnGrey: {
        backgroundColor: '#e7ecef',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    }
})