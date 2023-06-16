import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'


const HeaderProfil = () => {
    return (
        <>
            {/* <StatusBar backgroundColor="#edf2fb" barStyle="dark-content" /> */}
            <View style={styles.viewHead}>
                <Image
                    source={require('../img/user.jpg')}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100,
                    }}
                />
                {/* <Text style={[styles.textHead, { flex: 1 }]}>Water</Text> */}
                {/* <Text style={[styles.textHead, { flex: 1 }]}>Water</Text> */}
                {/* <Text style={styles.textNotif}>Notif</Text> */}
            </View >
        </>
    )
}

export default HeaderProfil

const styles = StyleSheet.create({
    viewHead: {
        backgroundColor: '#00A6FB',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: '100%',
        padding: 20,
        marginBottom: 5,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    textHead: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FFFFFF',

    },
    textNotif: {
        fontStyle: 'italic',
        marginLeft: 'auto',
        fontSize: 20,
        color: '#FFFFFF'
    }
})