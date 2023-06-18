import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-gifted-charts'

const Graph = () => {
    // const lineData = [{ value: 0 }, { value: 10 }, { value: 8 }, { value: 58 }, { value: 56 }, { value: 78 }, { value: 74 }, { value: 98 }];
    // const lineData2 = [{ value: 0 }, { value: 20 }, { value: 18 }, { value: 40 }, { value: 36 }, { value: 60 }, { value: 54 }, { value: 85 }];
    const customDataPoint = () => {
        return (
            <View
                style={{
                    width: 20,
                    height: 20,
                    backgroundColor: 'white',
                    borderWidth: 4,
                    borderRadius: 10,
                    borderColor: '#07BAD1',
                }}
            />
        );
    };
    const customLabel = (val) => {
        return (
            <View style={{ marginLeft: 0, }}>
                <Text style={{ color: 'silver', fontWeight: 'normal', textAlign: 'center' }}>{val}</Text>
            </View>
        );
    };
    const lineData = [
        { value: 0, labelComponent: () => customLabel('Jan') },
        { value: 10, labelComponent: () => customLabel('Feb') },
        { value: 8, labelComponent: () => customLabel('Mar') },
        { value: 58, labelComponent: () => customLabel('Apr') },
        { value: 56, labelComponent: () => customLabel('Mei') },
        { value: 78, labelComponent: () => customLabel('Jun') },
        { value: 74, labelComponent: () => customLabel('Jul') },
        { value: 98, labelComponent: () => customLabel('Aug') },
        { value: 56, labelComponent: () => customLabel('Sep') },
        { value: 78, labelComponent: () => customLabel('Oct') },
        { value: 74, labelComponent: () => customLabel('Nov') },
        { value: 98, labelComponent: () => customLabel('Des') },
    ];

    const lineData2 = [
        { value: 0, },
        { value: 20, },
        { value: 18, },
        { value: 40, },
        { value: 36, },
        { value: 60, },
        { value: 54, },
        { value: 85, },
        { value: 36, },
        { value: 60, },
        { value: 54, },
        { value: 85, },
    ];
    const lineData3 = [
        { value: 0, },
        { value: 30, },
        { value: 28, },
        { value: 50, },
        { value: 68, },
        { value: 89, },
        { value: 12, },
        { value: 33, },
        { value: 67, },
        { value: 34, },
        { value: 65, },
        { value: 68, },
    ];

    const hour1 = [
        { value: 67, labelComponent: () => customLabel('00.00') },
        { value: 30, labelComponent: () => customLabel('01.00') },
        { value: 28, labelComponent: () => customLabel('02.00') },
        { value: 50, labelComponent: () => customLabel('03.00') },
        { value: 68, labelComponent: () => customLabel('04.00') },
        { value: 89, labelComponent: () => customLabel('04.00') },
        { value: 12, labelComponent: () => customLabel('06.00') },
        { value: 33, labelComponent: () => customLabel('07.00') },
        { value: 67, labelComponent: () => customLabel('08.00') },
        { value: 34, labelComponent: () => customLabel('09.00') },
        { value: 65, labelComponent: () => customLabel('10.00') },
        { value: 68, labelComponent: () => customLabel('11.00') },
        { value: 12, labelComponent: () => customLabel('12.00') },
        { value: 30, labelComponent: () => customLabel('13.00') },
        { value: 50, labelComponent: () => customLabel('14.00') },
        { value: 68, labelComponent: () => customLabel('15.00') },
        { value: 89, labelComponent: () => customLabel('16.00') },
        { value: 12, labelComponent: () => customLabel('17.00') },
        { value: 33, labelComponent: () => customLabel('18.00') },
        { value: 67, labelComponent: () => customLabel('19.00') },
        { value: 34, labelComponent: () => customLabel('20.00') },
        { value: 65, labelComponent: () => customLabel('21.00') },
        { value: 68, labelComponent: () => customLabel('22.00') },
        { value: 65, labelComponent: () => customLabel('23.00') },
    ];
    const hour2 = [
        { value: 28, },
        { value: 50, },
        { value: 68, },
        { value: 89, },
        { value: 12, },
        { value: 33, },
        { value: 67, },
        { value: 34, },
        { value: 40, },
        { value: 36, },
        { value: 60, },
        { value: 54, },
        { value: 85, },
        { value: 36, },
        { value: 60, },
        { value: 12, },
        { value: 33, },
        { value: 67, },
        { value: 34, },
        { value: 40, },
        { value: 36, },
        { value: 60, },
        { value: 54, },
        { value: 85, },
    ];
    const hour3 = [
        { value: 40, },
        { value: 36, },
        { value: 60, },
        { value: 54, },
        { value: 85, },
        { value: 36, },
        { value: 60, },
        { value: 12, },
        { value: 33, },
        { value: 67, },
        { value: 34, },
        { value: 40, },
        { value: 36, },
        { value: 60, },
        { value: 54, },
        { value: 85, },
        { value: 28, },
        { value: 50, },
        { value: 68, },
        { value: 89, },
        { value: 12, },
        { value: 33, },
        { value: 67, },
        { value: 34, },
    ];

    const week1 = [
        { value: 58, labelComponent: () => customLabel('Week 1') },
        { value: 56, labelComponent: () => customLabel('Week 2') },
        { value: 78, labelComponent: () => customLabel('Week 3') },
        { value: 74, labelComponent: () => customLabel('Week 4') },
    ];
    const week2 = [
        { value: 60, },
        { value: 54, },
        { value: 85, },
        { value: 36, },
    ];
    const week3 = [
        { value: 89, },
        { value: 12, },
        { value: 33, },
        { value: 67, },
    ];
    const week4 = [
        { value: 33, },
        { value: 67, },
        { value: 34, },
        { value: 40, },
    ];

    return (
        <View>
            <View style={{ marginBottom: 60, }}>
                <Text style={{ fontSize: 20, color: 'silver', textAlign: 'center' }}>Hours Graph</Text>
                <LineChart
                    areaChart
                    // showVerticalLines
                    yAxisTextStyle={{ color: 'silver' }}
                    xAxisTextStyle={{ color: 'silver' }}
                    yAxisColor="silver"
                    xAxisColor="silver"
                    curved

                    // hideDataPoints
                    thickness={3}
                    noOfSections={4}
                    data={hour1}
                    data2={hour2}
                    data3={hour3}
                    height={200}
                    width={280}
                    spacing={80}
                    initialSpacing={25}
                    color1="#4361ee"
                    color2="#0077b6"
                    color3="#48cae4"
                    // textColor1="green"
                    dataPointsColor1="#4361ee"
                    dataPointsColor2="#0077b6"
                    dataPointsColor3="#48cae4"
                    startFillColor1="#4361ee"
                    startFillColor2="#0077b6"
                    startFillColor3="#48cae4"
                    startOpacity={1.8}
                    endOpacity={0.0}
                />
            </View>
            <View style={{ marginBottom: 60, }}>
                <Text style={{ fontSize: 20, color: 'silver', textAlign: 'center' }}>Weeks Graph</Text>
                <LineChart
                    areaChart
                    // showVerticalLines
                    yAxisTextStyle={{ color: 'silver' }}
                    xAxisTextStyle={{ color: 'silver' }}
                    yAxisColor="silver"
                    xAxisColor="silver"
                    curved
                    // hideDataPoints
                    thickness={3}
                    noOfSections={4}
                    data={week1}
                    data2={week2}
                    data3={week3}
                    
                    height={200}
                    width={280}
                    spacing={80}
                    initialSpacing={25}
                    color1="#4361ee"
                    color2="#0077b6"
                    color3="#48cae4"
                    // textColor1="green"
                    dataPointsColor1="#4361ee"
                    dataPointsColor2="#0077b6"
                    dataPointsColor3="#48cae4"
                    startFillColor1="#4361ee"
                    startFillColor2="#0077b6"
                    startFillColor3="#48cae4"
                    startOpacity={1.8}
                    endOpacity={0.0}
                />
            </View>
            <View style={{ marginBottom: 10, }}>
                <Text style={{ fontSize: 20, color: 'silver', textAlign: 'center' }}>Months Graph</Text>
                <LineChart
                    areaChart
                    yAxisTextStyle={{ color: 'silver' }}
                    xAxisTextStyle={{ color: 'silver' }}
                    yAxisColor="silver"
                    xAxisColor="silver"
                    curved
                    // hideDataPoints
                    thickness={3}
                    noOfSections={4}
                    data={lineData}
                    data2={lineData2}
                    data3={lineData3}
                    height={200}
                    width={280}
                    spacing={80}
                    initialSpacing={25}
                    color1="#4361ee"
                    color2="#0077b6"
                    color3="#48cae4"
                    // textColor1="green"
                    dataPointsColor1="#4361ee"
                    dataPointsColor2="#0077b6"
                    dataPointsColor3="#48cae4"
                    startFillColor1="#4361ee"
                    startFillColor2="#0077b6"
                    startFillColor3="#48cae4"
                    startOpacity={1.8}
                    endOpacity={0.0}
                />
            </View>
        </View>
    )
}

export default Graph

const styles = StyleSheet.create({})