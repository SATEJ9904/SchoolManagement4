import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, ToastAndroid } from 'react-native';
import React, { useState } from 'react'
import ImagePicker, { launchCamera } from 'react-native-image-picker';


const Form = () => {




    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastname, setLastName] = useState("")
    const [mobile1, setMobile1] = useState("")
    const [mobile2, setMobile2] = useState("")
    const [E_mail, setE_mail] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [DOB, setDOB] = useState("")
    const [tenth_marklist, setTenth_Marklist] = useState("")
    const [twelth_marklist, setTwelth_Marklist] = useState("")
    const [Profile_pic, setProfile_Pic] = useState("")
    const [show1, setShow1] = useState();
    const [show2, setShow2] = useState();
    const [show3, setShow3] = useState();



    //clear screen function

    const clear = () => {
        setFirstName(""),
            setMiddleName(""),
            setLastName(""),
            setMobile1(""),
            setMobile2(""),
            setE_mail(""),
            setAddress1(""),
            setAddress2(""),
            setDOB(""),
            setTenth_Marklist(""),
            setTwelth_Marklist(""),
            setProfile_Pic()
    }



    // sending image to database attempt 4



    //camera1
    const openGallery1 = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
        };
        launchCamera(options, setTenth_Marklist);

    };
    const uri1 = tenth_marklist?.assets && tenth_marklist.assets[0].uri;
    console.log(uri1)
    console.log(tenth_marklist)



    //camera2

    const openGallery2 = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
        };
        launchCamera(options, setTwelth_Marklist);

    };
    const uri2 = twelth_marklist?.assets && twelth_marklist.assets[0].uri;
    console.log(uri2)
    console.log(twelth_marklist)



    //camera3

    const openGallery3 = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
        };
        launchCamera(options, setProfile_Pic);

    };
    const uri3 = Profile_pic?.assets && Profile_pic.assets[0].uri;
    console.log(uri3)
    console.log(Profile_pic)



    const post = () => {
        console.log("Started")

        var formdata = new FormData();
        formdata.append("id", 0);
        formdata.append("firstName", firstName);
        formdata.append("middleName", middleName);
        formdata.append("lastname", lastname);
        formdata.append("mobile1", mobile1);
        formdata.append("mobile2", mobile2);
        formdata.append("E_mail", E_mail);
        formdata.append("address1", address1);
        formdata.append("address2", address2);
        formdata.append("DOB", DOB);
        formdata.append('tenth_marklist', {
            uri: tenth_marklist.assets[0].uri,
            type: "image/jpg",
            name: "cprograming.jpg",
        });
        formdata.append('twelth_marklist', {
            uri: twelth_marklist.assets[0].uri,
            type: "image/jpg",
            name: "cprograming.jpg",
        });
        formdata.append('Profile_pic', {
            uri: Profile_pic.assets[0].uri,
            type: "image/jpg",
            name: "cprograming.jpg",
        });

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        fetch("http://10.0.2.2:8000/admission%20form/", requestOptions)   //http://10.0.2.2:8000/Login/
            .then(response => response.text())
            .then(result => console.log(result), console.log("successful"))
            .catch(error => console.log('error', error));
        clear();
    }


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar
                backgroundColor="#033E3E">
            </StatusBar>

            {/* <TouchableOpacity onPress={()=>navigation.navigate("Home")}> */}
            <View style={{ minWidth: "100%", minHeight: "25%", marginTop: "5%", flexDirection: "row" }}>
                <Image
                    source={require('../Images/logo1.png')}
                    style={{ minWidth: "35%", minHeight: "35%", marginLeft: "0%" }}
                />
                <Text style={{ color: "black", fontSize: 22, marginLeft: "5%", marginRight: "30%" }}>Bharti Vidyapeeth (Deemed University) institute of management, Kolhapur</Text>
            </View>
            {/* </TouchableOpacity> */}

            <View style={{ marginTop: "-45%" }}>

                <TextInput
                    style={styles.input}
                    placeholder="firstName"
                    placeholderTextColor={"#000"}
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    keyboardType="name-phone-pad"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="middleName"
                    placeholderTextColor={"#000"}
                    onChangeText={(text) => setMiddleName(text)}
                    value={middleName}

                />
                <TextInput
                    style={styles.input}
                    placeholder="lastname"
                    placeholderTextColor={"#000"}
                    onChangeText={(text) => setLastName(text)}
                    value={lastname}

                />
                <TextInput
                    style={styles.input}
                    placeholder="mobile1"
                    placeholderTextColor={"#000"}
                    onChangeText={(text) => setMobile1(text)}
                    value={mobile1}

                />
                <TextInput
                    style={styles.input}
                    placeholder="mobile2"
                    placeholderTextColor={"#000"}
                    onChangeText={(text) => setMobile2(text)}
                    value={mobile2}

                />
                <TextInput
                    style={styles.input}
                    placeholder="E_mail"
                    placeholderTextColor={"#000"}
                    onChangeText={(text) => setE_mail(text)}
                    value={E_mail}

                />
                <TextInput
                    style={styles.input}
                    placeholder="address1"
                    placeholderTextColor={"#000"}
                    onChangeText={(text) => setAddress1(text)}
                    value={address1}

                />
                <TextInput
                    style={styles.input}
                    placeholder="address2"
                    placeholderTextColor={"#000"}
                    onChangeText={(text) => setAddress2(text)}
                    value={address2}

                />
                <TextInput
                    style={styles.input}
                    placeholder="DOB"
                    placeholderTextColor={"#000"}
                    onChangeText={(text) => setDOB(text)}
                    value={DOB}

                />
                <View style={{ flexDirection: "row", marginLeft: "5%", marginTop: "5%", height: "7%" }}>

                    <Text style={{ color: "#000", fontSize: 22, marginRight: "-10%", textDecorationStyle: "dotted", marginTop: "6%" }} >12th marksheet:</Text>
                    <View>
                        <TouchableOpacity onPress={() => { openGallery1(); setShow1(1) }}>


                            {
                                (() => {

                                    if (show1 === 1) {
                                        return (
                                            <View>
                                                <Image
                                                    source={{ uri: uri1 }}
                                                    style={{ width: "90%", height: "95%", marginLeft: 90, paddingBottom: "-40%", marginTop: "5%" }}
                                                />
                                            </View>
                                        )
                                    } else {
                                        return (
                                            <Image
                                                source={require('../Images/camera.png')}
                                                style={{ width: "50%", height: "60%", alignSelf: 'flex-start', marginTop: "10%", marginRight: "0%", marginLeft: 90, }}

                                            />
                                        )


                                    }
                                })()
                            }</TouchableOpacity>

                    </View>


                </View >
                <View style={{ flexDirection: "row", marginLeft: "5%", marginTop: "-2%", height: "7%" }}>

                    <Text style={{ color: "#000", fontSize: 22, marginRight: "-10%", textDecorationStyle: "dotted", marginTop: "6%" }}>10th marksheet:</Text>
                    <View>
                        <TouchableOpacity onPress={() => { openGallery2(); setShow2(1) }}>


                            {
                                (() => {

                                    if (show2 === 1) {
                                        return (
                                            <View>
                                                <Image
                                                    source={{ uri: uri2 }}
                                                    style={{ width: "90%", height: "95%", marginLeft: 90, paddingBottom: "-40%", marginTop: "5%" }}
                                                />
                                            </View>
                                        )
                                    } else {
                                        return (
                                            <Image
                                                source={require('../Images/camera.png')}
                                                style={{ width: "50%", height: "60%", alignSelf: 'flex-start', marginTop: "10%", marginRight: "0%", marginLeft: 90, }}

                                            />
                                        )


                                    }
                                })()
                            }</TouchableOpacity>

                    </View>


                </View >
                <View style={{ flexDirection: "row", marginLeft: "5%", marginTop: "-2%", height: "7%" }}>

                    <Text style={{ color: "#000", fontSize: 22, marginRight: "-10%", textDecorationStyle: "dotted", marginTop: "6%" }}>Profile Pic:</Text>
                    <View>
                        <TouchableOpacity onPress={() => { openGallery3(); setShow3(1) }}>


                            {
                                (() => {

                                    if (show3 === 1) {
                                        return (
                                            <View>
                                                <Image
                                                    source={{ uri: uri3 }}
                                                    style={{ width: "90%", height: "95%", marginLeft: 90, paddingBottom: "-40%", marginTop: "5%" }}
                                                />
                                            </View>
                                        )
                                    } else {
                                        return (
                                            <Image
                                                source={require('../Images/camera.png')}
                                                style={{ width: "50%", height: "60%", alignSelf: 'flex-start', marginTop: "10%", marginRight: "0%", marginLeft: 90, }}

                                            />
                                        )


                                    }
                                })()
                            }</TouchableOpacity>

                    </View>


                </View >

                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => post()}>
                        <Text style={styles.loginText}>Submit</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ color: "white", marginTop: "125%" }}></Text>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 30,
        paddingBottom: 50,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        justifyContent: "center",
        color: "#000",
        marginTop: "30%"
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#ebebeb',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        marginTop: "5%"
    },
    loginButton: {
        width: '40%',
        height: 50,
        backgroundColor: '#0909ef',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: "25%",
        marginTop: "5%"
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 21,
    },
    forgotPasswordButton: {
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: '#0909ef',
        fontSize: 17
    },
});

export default Form;