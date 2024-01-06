
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { useNavigation } from '@react-navigation/native';


const CustomDrawer = (props) => {
  const navigation = useNavigation();

  const showToast1 = () => {
    ToastAndroid.show("Sign out Successfully", ToastAndroid.SHORT);
  };

  const handleSignOut = () => {
    firestore()
    .collection('Users')
    .doc('sub-collection')
    .delete('email','password')
    .then(() => {
      showToast1();
      console.log('User deleted!');
      navigation.navigate("Login")
    });
};

  return (

    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#fff', borderTopRightRadius: 10 }}>
        <ImageBackground
          source={require('../Images/drawer.png')}
          style={{ padding: 0 }}>
          <Image
            source={require('../Images/logo1.png')}
            style={{ height: 170, width: 190, borderRadius: 50, marginBottom: 0, marginLeft: 40, marginTop: "5%" }}
          />
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontFamily: 'Roboto-Medium',
              marginBottom: 20,
              fontWeight: '800',
              marginLeft: "29%"
            }}>
            BV(DU)IMK
          </Text>

        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => { handleSignOut(); }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: "blue"
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomDrawer 