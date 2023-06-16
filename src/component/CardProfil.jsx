import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
const CardProfil = () => {
    return (
        <>
            <View style={styles.viewCard}>
                <View style={styles.viewCardHead}>
                    <Icon name="user" light={true} size={17} />
                </View>
                <View style={styles.viewCardForm}>
                    <View style={styles.viewForm}>
                        <Text style={styles.textLabel}>Name</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Yourname'
                            value='Amirull Azmi'
                        >
                        </TextInput>
                    </View>
                    <View style={styles.viewForm}>
                        <Text style={styles.textLabel}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Your Eamil'
                            value='amirullazmi0@gmail.com'
                        >
                        </TextInput>
                    </View>
                    <TouchableOpacity style={[styles.btnGrey, { marginTop: 10 }]}>
                        <Text style={styles.btnText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Change Password */}
            <View style={styles.viewCard}>
                <View style={styles.viewCardHeadGreen}>
                    <Icon name="key" solid={false} size={15} />
                </View>
                <View style={styles.viewCardForm}>
                    <View style={styles.viewForm}>
                        <Text style={styles.textLabel}>New password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='new password'
                            secureTextEntry={true}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.viewForm}>
                        <Text style={styles.textLabel}>Confirm new password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='confirm your password'
                            secureTextEntry={true}
                        >
                        </TextInput>
                    </View>
                    <TouchableOpacity style={[styles.btnGrey, { marginTop: 10 }]}>
                        <Text style={styles.btnText}>Update Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.viewCard, { padding: 10 }]}>
                <TouchableOpacity style={[styles.btnGrey, { width: '100%' }]}>
                    <Text style={[styles.btnText, { color: 'black' }]}>Download Water Data</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.viewCard, { padding: 10 }]}>
                <TouchableOpacity style={[styles.btnGrey, { width: '100%', flexDirection: 'row', justifyContent: 'center' }]}>
                    <Text style={[styles.btnText, { color: 'black' }]}>Logout</Text>
                    {/* <Icon name='sign-out' size={20} /> */}
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CardProfil

const styles = StyleSheet.create({
    viewCard: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 7,
        width: '90%',
        marginBottom: 10,
    },
    viewCardForm: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
    },
    viewForm: {
        marginBottom: 10,
    },
    viewCardHead: {
        backgroundColor: '#FFD60A',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 20,
        zIndex: 5,
    },
    viewCardHeadGreen: {
        backgroundColor: '#a5be00',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 20,
        zIndex: 5,
    },
    textInput: {
        width: '100%',
        padding: 10,
        paddingLeft: 25,
        backgroundColor: '#f9f9f9',
        shadowColor: 'black',
        borderRadius: 15,
    },
    textLabel: {
        padding: 10,
        fontSize: 12,
    },
    btnYellow: {
        backgroundColor: '#FFC300',
        marginTop: 10,
        padding: 5,
        borderRadius: 10,
        width: '50%',
        alignItems: 'center',
    },
    btnGreen: {
        backgroundColor: '#a5be00',
        marginTop: 10,
        padding: 5,
        borderRadius: 10,
        width: '50%',
        alignItems: 'center',
    },
    btnGrey: {
        backgroundColor: '#e7ecef',
        // marginTop: 10,
        padding: 5,
        borderRadius: 10,
        width: '50%',
        alignItems: 'center',
    },
    btnText: {
        color: 'black',
        textTransform: 'capitalize',
        fontSize: 15,
    },
})