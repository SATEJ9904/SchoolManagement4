import { StyleSheet, Text, ImageBackground, ScrollView, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import {
    BarChart,
    PieChart,
    ContributionGraph,

} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const StudentProgress = ({navigation}) => {

    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    const graph = {
        labels: ["FIT", "OIT", "C ", "Maths", "English"],
        datasets: [
            {
                data: [70, 85, 90, 75, 100]
            }
        ]
    };




    const commitsData = [
        { date: "2017-01-01", count: 4 },
        { date: "2017-01-03", count: 4 },
        { date: "2017-01-04", count: 4 },
        { date: "2017-01-05", count: 4 },
        { date: "2017-01-27", count: 4 },
        { date: "2017-01-30", count: 4 },
        { date: "2017-01-31", count: 4 },
        { date: "2017-03-01", count: 4 },
        { date: "2017-04-02", count: 4 },
        { date: "2017-03-05", count: 4 },
        { date: "2017-04-30", count: 4 },
        { date: "2017-05-06", count: 4 },
        { date: "2017-06-16", count: 4 },
        { date: "2017-02-30", count: 4 },
        { date: "2017-02-30", count: 4 },
        { date: "2017-02-30", count: 4 },
        { date: "2017-02-30", count: 4 },
        { date: "2017-02-30", count: 4 },
        { date: "2017-02-30", count: 4 },
        { date: "2017-02-30", count: 4 },
        { date: "2017-02-30", count: 4 }

    ];

    const piechart = [
        {
            name: "- Fit",
            Marks: 80,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            legendMarginRight: 10
        },
        {
            name: "- OIT",
            Marks: 95,
            color: "yellow",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            legendMarginRight: 10
        },
        {
            name: "- C Programming",
            Marks: 85,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            legendMarginRight: 50
        },
        {
            name: "-  Mathematics",
            Marks: 75,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            legendMarginRight: 10
        },
        {
            name: "- English",
            Marks: 100,
            color: "pink",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            legendMarginRight: 10
        }
    ];

    const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffffff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional

    };

    const chartConfig1 = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffffff",
        backgroundGradientToOpacity: 0,
        color: (opacity = 0) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false // optional
    };

    return (
        <View>
            <View style={{ backgroundColor: "blue", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate("SelectStudentsCourse")}>
                    <ImageBackground
                        source={require('../Images/back.png')}
                        style={{ width: 34, height: 30, alignSelf: 'flex-start', backgroundColor: "#0909ff", marginTop: "25%", marginRight: 0, marginLeft: "10%" }}
                       
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: "white", margin: "2.5%", marginLeft: "10%",padding:"1.5%" }}>Student Progress</Text>
            </View>
            <ScrollView>
                <View onPress={() => navigation.navigate("Studentprogress")} style={{ marginTop: "6%", height: "7.5%", flexDirection: "row", borderRadius: 20, borderRadius: 20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "19%", height: "100%", marginLeft: "2%", marginTop: "-3%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "14%", marginTop: "-2%", marginRight: "8%" }}>Mr. Satej Shendage,               BCA-I    SEM:- I </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", borderRadius: 20, paddingVertical: "5%" }}>
                    <LinearGradient style={{ borderRadius: 20, }} start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#0000FF', '#00BFFF']}
                    >
                        <View style={{ flexDirection: "column", borderRadius: 20, padding: "0%", width: "75%" }}>
                            <Text style={{ color: "#fff", fontSize: 25, marginLeft: "45%" }}>155+</Text>
                            <Text style={{ color: "#fff", fontSize: 25, marginLeft: "25%" }}>Lectures</Text>
                        </View>
                    </LinearGradient>
                    <LinearGradient style={{ borderRadius: 20, }} start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#0000FF', '#00BFFF']}
                    >
                        <View style={{ flexDirection: "column", borderRadius: 20, padding: "0%", width: "60%" }}>
                            <Text style={{ color: "#fff", fontSize: 25, marginLeft: "65%" }}>5+</Text>
                            <Text style={{ color: "#fff", fontSize: 25, marginLeft: "40%", marginHorizontal: "-100%", paddingHorizontal: "-40%" }}>Subjects</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View>
                    <Text style={{ color: "#000000", fontSize: 20, marginTop: "2%", marginLeft: "2%", marginBottom: "4%" }}>Project Marks :- </Text>
                    <BarChart
                        data={graph}
                        width={screenWidth / 1}
                        height={screenHeight / 3.8}
                        yAxisLabel=""
                        chartConfig={chartConfig}
                        verticalLabelRotation={20}

                    />
                </View>
                <Text style={{ color: "#000000", fontSize: 20, marginTop: "3%", marginLeft: "2%", marginBottom: "2%" }}>This Semister Attendence :-</Text>
                <ScrollView horizontal={true} >

                    <ContributionGraph
                        values={commitsData}
                        endDate={new Date("2017-06-30")}
                        numDays={189}
                        width={screenWidth}
                        height={screenHeight / 3.8}
                        chartConfig={chartConfig1}

                    />
                </ScrollView>
                <View style={{ marginBottom: "20%" }}>
                    <Text style={{ color: "#000000", fontSize: 20, marginTop: "2%", marginBottom: "3%", marginLeft: "5%" }}>This Semister Marks out of 100</Text>

                    <PieChart
                        data={piechart}
                        width={screenWidth / 1}
                        height={screenHeight / 3.5}
                        chartConfig={chartConfig}
                        accessor={"Marks"}
                        backgroundColor={"transparent"}

                        center={[5, -15]}
                        absolute
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default StudentProgress

const styles = StyleSheet.create({})