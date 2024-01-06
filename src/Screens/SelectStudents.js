import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import Animated, { PinwheelIn, StretchInY,Easing } from 'react-native-reanimated';

const SelectStudents = ({ navigation }) => {


    StretchInY.easing(Easing.ease);

    


    return (
        <View>
            <View style={{ backgroundColor: "blue", flexDirection: "row",}}>
                <TouchableOpacity onPress={() => navigation.navigate("SelectStudentsCourse")}>
                    <ImageBackground
                        source={require('../Images/back.png')}
                        style={{ width: 34, height: 30, alignSelf: 'flex-start', backgroundColor: "#0909ff", marginTop: 15, marginRight: 0, marginLeft: 10 }}
                        imageStyle={{ borderRadius: 0 }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: "white", margin: "2.5%", marginLeft: "27%" }}>Students</Text>
            </View>
            <ScrollView>
                
               <Animated.View entering={StretchInY}  style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20,borderRadius:20 }}>
               <TouchableOpacity onPress={()=>navigation.navigate("Studentprogress")} >
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "20%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "38%", marginTop: "-14%" }}>Satej Shendage</Text>
                </TouchableOpacity>
               </Animated.View>
               
                <Animated.View  entering={StretchInY} style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View entering={StretchInY}  style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View  entering={StretchInY} style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View entering={StretchInY}  style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View  entering={StretchInY} style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View entering={StretchInY}  style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View  entering={StretchInY} style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View entering={StretchInY}  style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View  entering={StretchInY} style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View entering={StretchInY}  style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View  entering={StretchInY} style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View entering={StretchInY}  style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View  entering={StretchInY} style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View entering={StretchInY}  style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View  entering={StretchInY} style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View entering={StretchInY} style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View  entering={StretchInY} style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
                <Animated.View entering={StretchInY}  style={{ backgroundColor: "skyblue", marginTop: "5%", height: "5%", flexDirection: "row",borderRadius:20 }}>
                    <Image
                        source={require('../Images/profile.jpg')}
                        style={{ width: "16%", height: "92%", marginLeft: "2%", marginTop: "0.5%", borderRadius: 70 }}
                    />
                    <Text style={{ color: "black", fontSize: 25, marginLeft: "15%", marginTop: "3%" }}>Satej Shendage</Text>
                </Animated.View>
               
            </ScrollView>
        </View>
    )
}
export default SelectStudents

const styles = StyleSheet.create({})