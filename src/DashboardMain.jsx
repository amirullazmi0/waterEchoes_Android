import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native'
import React, { useState, useEffect } from 'react'



import Header from './component/Header'
import Graph from './component/Graph'
import { axios } from 'axios'
import Card from './component/Card'

const baseURL = "https://skripsi-iot-ku.site/data";

// import axios from 'axios'
const DashboardMain = () => {
    const [dataSensor, setDataSensor] = useState(
        {
            "id": 0,
            "value1": "-",
            "value2": "-",
            "value3": "-",
            "value4": "-",
            "value5": "-",
            "created_at": "-",
            "updated_at": "-"
        }
    );
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = () => {
        fetch(baseURL)
            .then((response) => response.json())
            .then((data) => {
                setDataSensor(data.sensor)
                // Lakukan sesuatu dengan data yang diambil dari backend
            })
            .catch((error) => {
                console.error(error);
                // Tangani kesalahan jika terjadi
            });
    }
    useEffect(() => {
        fetchData()
        console.log(dataSensor);
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchData()
        setTimeout(() => {
            setRefreshing(false);
        }, 500);
    }, []);
    // console.log('sensor', dataSensor);
    return (
        <View style={styles.viewMain}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <Header />
                <View style={styles.viewScroll}>
                    <View style={styles.viewSensor}>
                        <Card sensor={dataSensor} />
                    </View>
                    <View style={styles.viewGraph}>
                        <Graph />
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        paddingTop: 30,
        paddingBottom: 100,
        marginTop: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // backgroundColor: '#fefcfb',
        backgroundColor: '#003554',
        // backgroundColor: '#d7e3fc',
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