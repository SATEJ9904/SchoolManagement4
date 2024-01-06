import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const Exams = ({ navigation }) => {
    return (
        <View>

            <View style={{ backgroundColor: "blue", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <ImageBackground
                        source={require('../Images/drawer.png')}
                        style={{ width: 34, height: 30, alignSelf: 'flex-start', backgroundColor: "#0909ff", marginTop: 15, marginRight: 0, marginLeft: 10 }}
                        imageStyle={{ borderRadius: 0 }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: "white", margin: "2.5%", marginLeft: "27%" }}>Exams</Text>
            </View>
            <View style={{ backgroundColor: "grey", height: "100%" }}>
                <ImageBackground
                    source={require('../Images/bgimage.png')}
                    style={{ marginTop: "10%", backgroundColor: "grey", height: "80%" }}
                >
                    <View>
                        <Text style={{ color: "black", fontSize: 35, marginTop: "5%", marginLeft: "23%" }}>Select Course:-</Text>
                        <TouchableOpacity style={{ marginTop: "35%", marginLeft: "0%", backgroundColor: 'transparent', borderRadius: 20, borderWidth: 2, borderColor: "#000" }} onPress={() => navigation.navigate("ExamSelectYear")}>
                            <Text style={{ color: "#000", width: "200%", marginLeft: "45%", fontSize: 25, paddingVertical: 10 }}>BCA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: "15%", marginLeft: "0%", backgroundColor: 'transparent', borderRadius: 20, borderWidth: 2, borderColor: "#000" }} onPress={() => navigation.navigate("ExamSelectYear")}>
                            <Text style={{ color: "#000", width: "200%", marginLeft: "45%", fontSize: 25, paddingVertical: 10 }}>BBA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: "15%", marginLeft: "0%", backgroundColor: 'transparent', borderRadius: 20, borderWidth: 2, borderColor: "#000" }} onPress={() => navigation.navigate("PGE")}>
                            <Text style={{ color: "#000", width: "200%", marginLeft: "45%", fontSize: 25, paddingVertical: 10 }}>MCA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: "15%", marginLeft: "0%", backgroundColor: 'transparent', borderRadius: 20, borderWidth: 2, borderColor: "#000" }} onPress={() => navigation.navigate("PGE")}>
                            <Text style={{ color: "#000", width: "200%", marginLeft: "45%", fontSize: 25, paddingVertical: 10 }}>MBA</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        </View>
    )
}



export default Exams

const styles = StyleSheet.create({})