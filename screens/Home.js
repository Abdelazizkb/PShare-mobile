import tw from '../style/twrnc';
import { StyleSheet, Text, View, Pressable, TextInput, FlatList ,ImageBackground,Alert,TouchableWithoutFeedback,Keyboard,Image} from 'react-native';
import Input from '../components/Input';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={tw`h-full w-full items-center justify-center bg-white`}>
              <View style={tw`h-3/7 w-full items-center justify-end`}>
                  <Image style={tw``} source={require('../img/home15.png')} />
              </View>
                <View style={tw`w-full items-center  mt-4 rounded-lg` } >
                    <Text  style={tw` text-gray-700 font-nun-bold text-4xl`}>Bienvenue <Text  style={tw`text-bgreen font-nun-bold text-4xl`}>PShare</Text></Text>
                    <Text  style={tw` text-gray-700 font-nun text-xl my-2`}> Toutes vos données médicales</Text>
                    <Text  style={tw` text-gray-700  font-nun text-xl `}>  en un seul clic</Text>
                </View>
              <View style={tw`w-4/6  flex-row bg-bgreen items-center justify-end border-3 border-bgreen rounded-lg mt-10 shadow-lg overflow-hidden`}>
                <Pressable style={tw`w-1/2 items-center  ` } >
                    <Text  style={tw`w-full text-center text-black font-nun-bold  bg-white py-3`} onPress={() => navigation.navigate('login')}>Connexion</Text>
                </Pressable>
                <Pressable style={tw`w-1/2 items-center ` } >
                    <Text  style={tw`text-white font-nun-bold py-3 `} onPress={() => navigation.navigate('signup')}>S'inscrir</Text>
                </Pressable>
              </View>

            </View>

    </TouchableWithoutFeedback>
  )
}

export default Home