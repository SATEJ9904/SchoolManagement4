import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react'

const TeachersList = ({ navigation }) => {
    return (
        <View>
            <View style={{ backgroundColor: "blue", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Teachers")}>
                    <ImageBackground
                        source={require('../Images/back.png')}
                        style={{ width: 34, height: 30, alignSelf: 'flex-start', backgroundColor: "#0909ff", marginTop: 15, marginRight: 0, marginLeft: 10 }}
                        imageStyle={{ borderRadius: 0 }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: "white", margin: "2.5%", marginLeft: "27%" }}>Teachers</Text>
            </View>
            <ScrollView>
                <View style={{ backgroundColor: "skyblue", marginTop: "5%", height: "15%", flexDirection: "row" }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </View>
                <View style={{ backgroundColor: "skyblue", marginTop: "5%", height: "15%", flexDirection: "row" }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </View>
                <View style={{ backgroundColor: "skyblue", marginTop: "5%", height: "15%", flexDirection: "row" }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </View>
                <View style={{ backgroundColor: "skyblue", marginTop: "5%", height: "15%", flexDirection: "row" }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </View>
                <View style={{ backgroundColor: "skyblue", marginTop: "5%", height: "15%", flexDirection: "row" }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </View>
                <View style={{ backgroundColor: "skyblue", marginTop: "5%", height: "15%", flexDirection: "row" }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </View>
            </ScrollView>
        </View>
    )
}
export default TeachersList

const styles = StyleSheet.create({})