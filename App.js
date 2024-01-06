import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PermissionsAndroid } from 'react-native';


import SignIn from './src/Screens/Signin';
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import Splash from './src/Screens/Splash';
import CustomDrawer from './src/Screens/CustomDrawer';
import Students from './src/Screens/Students';
import Teachers from './src/Screens/Teachers';
import Faculty from './src/Screens/Faculty';
import Lectures from './src/Screens/Lectures';
import Exams from './src/Screens/Exams';
import Holidays from './src/Screens/Holidays';
import Lec1 from './src/Screens/Lec1';
import BCAL from './src/Screens/BCAL';
import Lec2 from './src/Screens/Lec2';
import Lec3 from './src/Screens/Lec3';
import Lec4 from './src/Screens/Lec4';
import PG from './src/Screens/PG';
import SelectStudents from './src/Screens/SelectStudents';
import SelectStudentsCourse from './src/Screens/SelectStudentsCourse';
import PGS from './src/Screens/PGS';
import SelectCourseTeachers from './src/Screens/SelectCourseTeachers';
import TeachersList from './src/Screens/TeachersList';
import PGT from './src/Screens/PGT';
import ExamSelectYear from './src/Screens/ExamSelectYear';
import PGE from './src/Screens/PGE';
import ExamList from './src/Screens/ExamList';
import StudentProgress from './src/Screens/Studentprogress';
import Animation from './src/Screens/Animation';
import Form from './src/Screens/Form';










//https://github.com/itzpradip/react-navigation-v6-mix/blob/master/src/navigation/AppStack.js



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {

 


  return (

    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false,
      }}
    >



      <Drawer.Screen

        name="Login"
        component={Login}
        options={{
          drawerActiveBackgroundColor: '#0909ff',
          drawerActiveTintColor: '#FFF',
          drawerInactiveTintColor: '#0909ff',
          title: 'Login',
          drawerLabelStyle: {
            marginLeft: 10,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
            height: "-100%", width: "-100%", display: 'none'
          },

        }} />



      <Drawer.Screen

        name="Home"
        component={Home}
        options={{
          drawerActiveBackgroundColor: '#0909ff',
          drawerActiveTintColor: '#FFF',
          drawerInactiveTintColor: '#0909ff',
          title: 'Home',
          drawerLabelStyle: {
            marginLeft: 10,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,

          },

        }} />

      <Drawer.Screen

        name="Students"
        component={Students}
        options={{
          drawerActiveBackgroundColor: '#0909ff',
          drawerActiveTintColor: '#FFF',
          drawerInactiveTintColor: '#0909ff',
          title: 'Students',
          drawerLabelStyle: {
            marginLeft: 10,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }} />

      <Drawer.Screen

        name="Teachers"
        component={Teachers}
        options={{
          drawerActiveBackgroundColor: '#0909ff',
          drawerActiveTintColor: '#FFF',
          drawerInactiveTintColor: '#0909ff',
          title: 'Teachers',
          drawerLabelStyle: {
            marginLeft: 10,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }} />

      <Drawer.Screen

        name="Faculty"
        component={Faculty}
        options={{
          drawerActiveBackgroundColor: '#0909ff',
          drawerActiveTintColor: '#FFF',
          drawerInactiveTintColor: '#0909ff',
          title: 'Faculty',
          drawerLabelStyle: {
            marginLeft: 10,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }} />

      <Drawer.Screen

        name="Lectures"
        component={Lectures}
        options={{
          drawerActiveBackgroundColor: '#0909ff',
          drawerActiveTintColor: '#FFF',
          drawerInactiveTintColor: '#0909ff',
          title: 'Lectures',
          drawerLabelStyle: {
            marginLeft: 10,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }} />
      <Drawer.Screen

        name="Exams"
        component={Exams}
        options={{
          drawerActiveBackgroundColor: '#0909ff',
          drawerActiveTintColor: '#FFF',
          drawerInactiveTintColor: '#0909ff',
          title: 'Exams',
          drawerLabelStyle: {
            marginLeft: 10,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }} />

      <Drawer.Screen

        name="Holidays"
        component={Holidays}
        options={{
          drawerActiveBackgroundColor: '#0909ff',
          drawerActiveTintColor: '#FFF',
          drawerInactiveTintColor: '#0909ff',
          title: 'Holidays',
          drawerLabelStyle: {
            marginLeft: 10,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }} />


      <Drawer.Screen

        name="Splash"
        component={Splash}
        options={{
          drawerActiveBackgroundColor: '#0909ff',
          drawerActiveTintColor: '#FFF',
          drawerInactiveTintColor: '#0909ff',
          title: 'Splash',
          drawerLabelStyle: {
            marginLeft: 10,
            fontFamily: 'Roboto-Medium',
            fontSize: 20,
            display: 'none',
          },
        }}
      />

    </Drawer.Navigator>

  );
}




export default function App() {

  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

  return (

    <NavigationContainer >

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lec1" component={Lec1} />
        <Stack.Screen name="Lec2" component={Lec2} />
        <Stack.Screen name="Lec3" component={Lec3} />
        <Stack.Screen name="Lec4" component={Lec4} />
        <Stack.Screen name="BCAL" component={BCAL} />
        <Stack.Screen name="PG" component={PG} />
        <Stack.Screen name="PGS" component={PGS} />
        <Stack.Screen name="PGT" component={PGT} />
        <Stack.Screen name="PGE" component={PGE} />
        <Stack.Screen name="SelectStudents" component={SelectStudents} />
        <Stack.Screen name="SelectStudentsCourse" component={SelectStudentsCourse} />
        <Stack.Screen name="SelectCourseTeachers" component={SelectCourseTeachers} />
        <Stack.Screen name="TeachersList" component={TeachersList} />
        <Stack.Screen name="ExamSelectYear" component={ExamSelectYear} />
        <Stack.Screen name="ExamList" component={ExamList} />
        <Stack.Screen name="Studentprogress" component={StudentProgress} />
        <Stack.Screen name="Animation" component={Animation} />
        <Stack.Screen name="Form" component={Form} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}



