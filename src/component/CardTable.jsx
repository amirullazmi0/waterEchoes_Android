import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
const CardTable = () => {
    return (
        <>
            <View style={styles.viewCard}>
                <View style={styles.viewCardHead}>
                    <Icon name="tint" size={25} />
                </View>
                <Text style={styles.textCard}>PH</Text>
                <View style={styles.viewCardFooter}></View>
            </View>
            <View style={styles.viewCard}>
                <View style={styles.viewCardHead}>
                    <Icon name="rainbow" size={25} />
                </View>
                <Text style={styles.textCard}>PH</Text>
                <View style={styles.viewCardFooter}></View>
            </View>
            <View style={styles.viewCard}>
                <View style={styles.viewCardHead}>
                    <Icon name="thermometer-half" size={25} />
                </View>
                <Text style={styles.textCard}>PH</Text>
                <View style={styles.viewCardFooter}></View>
            </View>
            <View style={styles.viewCard}>
                <View style={styles.viewCardHead}>
                    <Icon name="bolt" size={25} />
                </View>
                <Text style={styles.textCard}>PH</Text>
                <View style={styles.viewCardFooter}></View>
            </View>
            <View style={styles.viewCard}>
                <View style={styles.viewCardHead}>
                    <Icon name="virus" size={25} />
                </View>
                <Text style={styles.textCard}>1234</Text>
                <View style={styles.viewCardFooter}></View>
            </View>
        </>
    )
}

export default CardTable

const styles = StyleSheet.create({
    viewCard: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        borderRadius: 7,
        width: '90%',
        paddingBottom: 10,
        marginBottom: 10,
        elevation: 1,
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
    viewCardFooter: {
        backgroundColor: '#00b4d8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width: '40%',
        marginTop: 'auto',
        marginLeft: 'auto',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
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
        color: '#00A6FB',
        padding: 20,
        fontSize: 28,
        fontWeight: 'bold'
    }
})