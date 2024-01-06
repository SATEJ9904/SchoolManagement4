import React, { useState, useEffect } from 'react';
import { View, TextInput, ToastAndroid, Image, StatusBar, StyleSheet, TouchableOpacity, Text } from 'react-native';



const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState("")

  const showToast = () => {
    ToastAndroid.show("Successfully Logged In", ToastAndroid.SHORT);
  };
  const showToast1 = () => {
    ToastAndroid.show("Please Check Your E-mail or Password", ToastAndroid.SHORT);
  };




  {/*} const handleLogin = () => {
    firestore()
      .collection('Users')
      // Filter results
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.docs);

        if (querySnapshot.docs.length > 0) {
          if (
            querySnapshot.docs[0]._data.email === email &&
            querySnapshot.docs[0]._data.password === password
          ) {
            navigation.navigate('Home')
            showToast();
            
          } else {
            showToast1();
          }
          console.log(
            querySnapshot.docs[0]._data.email +
            ' ' +
            querySnapshot.docs[0]._data.password
          )
        } else {
          console.log("account not found")
          showToast1();
        }

      })
      .catch(error => {
        console.log(error);
      });
  };  */}


  const clear = () => {
    setName("");
    setPassword("");
  }




  const getAPIData = async () => {
    try {
      const url = "http://10.0.2.2:8000/Login/";   //"http://10.0.2.2:3000/getusers/info"
      let result = await fetch(url);
      result = await result.json();
      console.log(result)
     

      result.length ? result.map((item) => {
        (() => {

            if (email === item.E_mail && password === item.Password) {
                console.log("successful")
                console.log(item.id)
                navigation.navigate("Home", { item1: item })
                clear();
            } else {
                console.log("unsuccessful")
            }
        })()
    }
    ) : null

    console.log("data Fetch Successfully")

    }catch (error) {
      console.log("Error", error)
    }
  }



  useEffect(() => {
    // getAPIData();
  }, []);



  return (
    <View style={styles.container}>

      <StatusBar
        backgroundColor="#1F45FC">
      </StatusBar>

      <View style={{ minWidth: "100%", minHeight: "52%", marginTop: "-25%", flexDirection: "row" }}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <Image
          source={require('../Images/logo1.png')}
          style={{ minWidth: "45%", minHeight: "35%", marginLeft: "48%",marginRight:"-9%" }}
        />
        </TouchableOpacity>
        <Text style={{ color: "black", fontSize: 22, marginLeft: "0%", marginRight: "40%" }}>Bharti Vidyapeeth (Deemed University) institute of management, Kolhapur</Text>
      </View>
      <View style={{ marginTop: "-40%", marginLeft: "0%", marginBottom: "20%" }}>
        <Text style={{ color: "black", fontSize: 40 }}> login</Text>
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
      <TouchableOpacity style={styles.button} onPress={getAPIData}>
        <Text style={styles.btntxt}>Login</Text>
      </TouchableOpacity>
      {/* Optional: Forgot password */}
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.forgotPassword}>Create Account ?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Form")}>
        <Text style={styles.forgotPassword}>Admission Form</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    minWidth: '100%',
    minHeight: "7%",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "grey"
  },
  forgotPassword: {
    marginTop: "5%",
    color: 'blue',
    fontSize: 18
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

export default Login;