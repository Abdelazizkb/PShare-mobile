import tw from '../style/twrnc';
import { StyleSheet, Text, View, Pressable, TextInput, ScrollView ,ImageBackground,Alert,TouchableWithoutFeedback,Keyboard,Image} from 'react-native';
import React,{useState} from 'react'
import Input from '../components/Input';
import {MaterialIcons} from '@expo/vector-icons'
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Account = ({navigation,user,logout,isAuthenticated}) => {
  const [isFocused, setIsFocused] =useState(false)

  if(!isAuthenticated)
    navigation.navigate('login')
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={tw`w-full h-full `}>
          <ScrollView>
            <View  style={tw`w-full pt-5 justify-center items-center `}>
              <Image style={tw``} source={require('../img/icon-patient.png')} />
              <Text style={tw`font-nun-bold text-gray-600 mt-4 text-lg`}>Modifier votre profil</Text>
            </View>
            <View style={tw`w-full justify-center  px-5  `}>
              <Text style={tw`font-nun-bold text-gray-600 mt-4 mb-1`}>Nom</Text>
              <TextInput value={user.last_name} style={tw`p-2 pl-8 h-12  rounded-lg  border-2  w-full ${isFocused? "border-bgreen" : "border-gray-300"}`}
                  placeholder="Email"/>
              <Text style={tw`font-nun-bold text-gray-600 mt-4 mb-1`}>Prénom</Text>
              <TextInput value={user.first_name} style={tw`p-2 pl-8 h-12  rounded-lg  border-2  w-full ${isFocused? "border-bgreen" : "border-gray-300"}`}
                  placeholder="Email"/>
              <Text style={tw`font-nun-bold text-gray-600 mt-4 mb-1`}>Date de naissance</Text>
              <TextInput  value={user.birthday} style={tw` p-2 pl-8 h-12  rounded-lg  border-2  w-full ${isFocused? "border-bgreen" : "border-gray-300"}`}
                  placeholder="Email"/>
              <Text style={tw`font-nun-bold text-gray-600 mt-4 mb-1`}>Inn</Text>
              <TextInput value={user.inn} style={tw`p-2 pl-8 h-12  rounded-lg  border-2  w-full ${isFocused? "border-bgreen" : "border-gray-300"}`}
                  placeholder="Email"/>
              <Text  style={tw`font-nun-bold text-gray-600 mt-4 mb-1`}>Téléphone</Text>
              <TextInput value={user.phone} style={tw`p-2 pl-8 h-12  rounded-lg  border-2  w-full ${isFocused? "border-bgreen" : "border-gray-300"}`}
                  placeholder="Email"/>
              <Text  style={tw`font-nun-bold text-gray-600 mt-4 mb-1`}>E-mail</Text>
              <TextInput value={user.email} style={tw` p-2 pl-8 h-12  rounded-lg  border-2  w-full ${isFocused? "border-bgreen" : "border-gray-300"}`}
                  placeholder="Email"/>
              <Pressable style={tw`w-full items-center bg-bgreen py-3 mt-5 rounded-lg` }>
                  <Text  style={tw`text-white font-nun-bold`}>Modifier</Text>
              </Pressable>
              <Pressable style={tw`w-full items-center  py-3 mt-1 mb-5 rounded-lg` } onPress={()=>logout()}>
                  <Text  style={tw`font-nun-bold font-nun-bold`}>Se déconnecter</Text>
              </Pressable>
            </View>
          </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{logout}) (Account)