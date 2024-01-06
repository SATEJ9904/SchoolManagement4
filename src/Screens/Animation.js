import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated,{interpolate,useAnimatedStyle,useSharedValue, withSpring, withTiming} from 'react-native-reanimated'

const Animation = ({navigation}) => {

const animation=useSharedValue(1);
const animatedStyle=useAnimatedStyle(()=>{
    const width=interpolate(animation.value,[3,2,1,0],[550,450,350,250]);
    const borderRadius=interpolate(animation.value,[2,1,0],[0,0,0]);
    return{
        width:width,
        height:width,
        backgroundColor:"#fff",
        borderRadius:borderRadius,
    }
})
const animatedStyleText=useAnimatedStyle(()=>{
    const width=interpolate(animation.value,[2,1,0],[400,400,400]);
    const fontSize=interpolate(animation.value,[2,1,0],[30,30,30])
    return{
        width:width,
        height:width,
        fontSize:fontSize,
        backgroundColor:"#fff",
        fontFamily:'lucida grande'
    }
})

useEffect(()=>{
    animation.value=withTiming(0,{duration:5000});
    animation.value=withTiming(1,{duration:3000});
    animation.value=withTiming(2,{duration:5000});
    animation.value=withTiming(1,{duration:5000});
    animation.value=withTiming(0,{duration:3000});
    // setTimeout(() => {
    //     navigation.navigate('Login');
    //   }, 5000)
},[])

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff",}}>
     <Animated.Image
      source={require('../Images/logo1.png')}
     style={[
        {
        marginTop:"50%",
        width:100,
        height:100,
        backgroundColor:'#000',
     }, animatedStyle,
     ]} ></Animated.Image>
     <Animated.Text  style={[
        {
        width:100,
        height:100,
        backgroundColor:'#000',
        color:"#000",
        marginLeft:"10%",
        marginTop:"15%",
        fontWeight: 'bold'
     }, animatedStyleText,
     ]} >Bharti Vidyapeeth (Deemed University) institute of management, Kolhapur</Animated.Text>
    
    </View>
  )
}

export default Animation

const styles = StyleSheet.create({})