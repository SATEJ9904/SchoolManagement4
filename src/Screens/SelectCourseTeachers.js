import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const SelectCourseTeachers = ({ navigation }) => {
    return (
        <View>

            <View style={{ backgroundColor: "blue", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Lectures")}>
                    <ImageBackground
                        source={require('../Images/back.png')}
                        style={{ width: 34, height: 30, alignSelf: 'flex-start', backgroundColor: "#0909ff", marginTop: 15, marginRight: 0, marginLeft: 10 }}
                        imageStyle={{ borderRadius: 0 }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: "white", margin: "2.5%", marginLeft: "27%" }}>Lectures</Text>
            </View>
            <View style={{ backgroundColor: "grey", height: "100%" }}>
                <ImageBackground
                    source={require('../Images/bgimage.png')}
                    style={{ marginTop: "10%", backgroundColor: "grey", height: "80%" }}
                >
                    <View>
                        <Text style={{ color: "black", fontSize: 35, marginTop: "5%", marginLeft: "23%" }}>Select Year :-</Text>
                        <TouchableOpacity style={{ marginTop: "35%", marginLeft: "0%", backgroundColor: 'transparent', borderRadius: 20, borderWidth: 2, borderColor: "#000" }} onPress={() => navigation.navigate("TeachersList")}>
                            <Text style={{ color: "#000", width: "200%", marginLeft: "40%", fontSize: 25, paddingVertical: 10 }}>1st YEAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: "15%", marginLeft: "0%", backgroundColor: 'transparent', borderRadius: 20, borderWidth: 2, borderColor: "#000" }} onPress={() => navigation.navigate("TeachersList")}>
                            <Text style={{ color: "#000", width: "200%", marginLeft: "40%", fontSize: 25, paddingVertical: 10 }}>2nd YEAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: "15%", marginLeft: "0%", backgroundColor: 'transparent', borderRadius: 20, borderWidth: 2, borderColor: "#000" }} onPress={() => navigation.navigate("TeachersList")}>
                            <Text style={{ color: "#000", width: "200%", marginLeft: "40%", fontSize: 25, paddingVertical: 10 }}>3rd YEAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: "15%", marginLeft: "0%", backgroundColor: 'transparent', borderRadius: 20, borderWidth: 2, borderColor: "#000" }} onPress={() => navigation.navigate("TeachersList")}>
                            <Text style={{ color: "#000", width: "200%", marginLeft: "40%", fontSize: 25, paddingVertical: 10 }}>4th YEAR</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        </View>
    )
}

export default SelectCourseTeachers

const styles = StyleSheet.create({})