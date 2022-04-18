import {useState} from 'react';
import tw from '../style/twrnc';
import { StyleSheet, Text, View, Pressable, TextInput, FlatList ,ImageBackground,Alert,TouchableWithoutFeedback,Keyboard,Image} from 'react-native';
import Input from '../components/Input';
import {MaterialIcons} from '@expo/vector-icons'

const Login = ({navigation}) => {
    const [isFocused, setIsFocused] =useState(false)
    const [email , setEmail] =useState("")
    const [password , setPassword] =useState("")
    const login =() =>{

    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View  style={tw`flex w-full items-center`}>
            <View style={tw`h-3/7 -ml-5 items-center justify-end`}>
                <Image style={tw``} source={require('../img/doctorblob.png')} />
            </View>
            <View style={tw`h-3/5 w-5/6 items-start justify-start pt-5`}>
                <Text style={tw`font-bold text-bgreen text-4xl mb-4`}>Login</Text>

                <Text style={tw`font-bold text-gray-700`}>E-mail</Text>
                <Input placeholder="Exmple@gmail.com" setValue={setEmail}>
                    <MaterialIcons style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="email" size={25} />
                </Input>

                <Text style={tw`font-bold text-gray-700 `}>Mot de passe</Text>
                <Input secure={true} placeholder="*********************" setValue={setPassword}>
                    <MaterialIcons style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="security" size={25} />
                </Input>
                <Pressable style={tw`w-full items-center bg-bgreen py-3 mt-2 rounded-lg` } onPress={login}>
                    <Text  style={tw`text-white font-bold`}>Connexion</Text>
                </Pressable>

                <View style={tw`w-full items-center  py-3 mt-2 rounded-lg` }>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('signup')}>
                        <Text style={tw`text-bgreen font-bold`}>S'inscrir</Text>
                    </TouchableWithoutFeedback>
                </View>

            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default Login