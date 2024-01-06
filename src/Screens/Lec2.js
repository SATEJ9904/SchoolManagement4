import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'

const Lec2 = ({ navigation }) => {
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
                <Text style={{
                    fontSize: 25,
                    color: "white",
                    margin: "2.5%",
                    marginLeft: "15%"
                }}>Lectures of 2nd year</Text>
            </View>
            <ScrollView horizontal={true} style={{ backgroundColor: "blue", marginTop: "5%", padding: "2%", marginRight: "2%" }}>
                <Text style={{ fontSize: 20, color: "white", marginLeft: 5 }}>Monday</Text>
                <Text style={{ fontSize: 20, color: "white", marginLeft: 15 }}>Tuesday</Text>
                <Text style={{ fontSize: 20, color: "white", marginLeft: 15 }}>Wednesday</Text>
                <Text style={{ fontSize: 20, color: "white", marginLeft: 15 }}>Thursday</Text>
                <Text style={{ fontSize: 20, color: "white", marginLeft: 15 }}>Friday</Text>
                <Text style={{ fontSize: 20, color: "white", marginLeft: 15, paddingRight: 20 }}>Saturday</Text>
            </ScrollView>

        </View>
    )
}

export default Lec2

const styles = StyleSheet.create({})