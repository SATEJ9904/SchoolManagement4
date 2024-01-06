import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const Faculty = ({ navigation }) => {
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
                <Text style={{ fontSize: 25, color: "white", margin: "2.5%", marginLeft: "27%" }}>Faculty</Text>
            </View>
        </View>
    )
}

export default Faculty

const styles = StyleSheet.create({})