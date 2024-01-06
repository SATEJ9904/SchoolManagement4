import React, { useState } from 'react';
import { View, TextInput, StatusBar, Image, ToastAndroid, TouchableOpacity, Text, StyleSheet } from 'react-native';


const SignIn = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const showToast = () => {
        ToastAndroid.show("Successfully Sign In", ToastAndroid.SHORT);
    };

    // const handleSignIn = () => {
    //     firestore()
    //         .collection('Users')
    //         .add({
    //             name: name,
    //             email: email,
    //             password: password,

    //         })
    //         .then(() => {
    //             showToast();
    //             console.log('User added!');
    //             navigation.navigate("Login")
    //         })
    //         .catch(error => {

    //             console.error(error);
    //         });

    // };


    const handleSignIn = () => {
        console.log("Started")

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "id": 0,
          "E_mail": email,
          "Password": password
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://10.0.2.2:8000/Login/", requestOptions)
          .catch(error => console.log('error', error));
          console.log("successful")
    }

    return (
        <View style={styles.container}>

            <StatusBar
                backgroundColor="#1F45FC">
            </StatusBar>

            <View style={{ minWidth: "100%", minHeight: "52%", marginTop: "-35%", flexDirection: "row" }}>
                <Image
                    source={require('../Images/logo1.png')}
                    style={{ minWidth: "35%", minHeight: "35%", marginLeft: "30%" }}
                />
                <Text style={{ color: "black", fontSize: 22, marginLeft: "5%", marginRight: "30%" }}>Bharti Vidyapeeth (Deemed University) institute of management, Kolhapur</Text>
            </View>
            <View style={{ marginTop: "-50%", marginLeft: "0%", marginBottom: "20%" }}>
                <Text style={{ color: "black", fontSize: 40 }}> Sign Up</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"#000000"}
                onChangeText={text => setEmail(text)}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={"#000000"}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={() => { handleSignIn(); }}>
                <Text style={styles.btntxt}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        minWidth: '100%',
        minHeight: '7%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: "grey"
    },
    forgotPassword: {
        marginTop: 10,
        color: 'blue',
    },
    button: {
        minWidth: "50%",
        minHeight: "6%",
        backgroundColor: "blue",
        borderRadius: 20,
        marginTop: "5%"
    },
    btntxt: {
        marginTop: "2%",
        color: 'white',
        fontSize: 25,
        marginLeft: "15%"
    }
});

export default SignIn;