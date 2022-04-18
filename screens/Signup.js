import { StyleSheet, Text, View, Pressable, TextInput, Modal ,ImageBackground,Alert,TouchableWithoutFeedback,Keyboard,Image} from 'react-native';
import React,{useState} from 'react'
import tw from '../style/twrnc';
import Input from '../components/Input';
import { FontAwesome } from '@expo/vector-icons';

const Signup = ({navigation}) => {
  const [show, setShow] = useState(true)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View  style={tw`flex w-full h-full items-center justify-center`}>
          <View style={tw`w-full items-center justify-center`}>
                <Text style={tw`font-bold text-4xl text-bgreen`}>Inscrez vous</Text>
                <Text style={tw`font-bold text-2xl my-2`}>bienvenue, abonnez-vous et</Text>
                <Text style={tw`font-bold text-2xl mb-4`}>gérez vos données médicales</Text>
          </View>
          {show && <Page1 setShow={setShow}/>}
          {(!show) && <Page2 setShow={setShow}/>}

          <View style={tw`w-full items-center  py-3 mt-2 rounded-lg` }>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('login')}>
                        <Text style={tw`text-bgreen font-bold`}>Connexion</Text>
                    </TouchableWithoutFeedback>
          </View>

        </View>
    </TouchableWithoutFeedback>
  )
}

export default Signup

const Page1=({setShow})=>{
  return(
    <View style={tw`w-5/6 items-center`}>
      <Input placeholder="Nom" >
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>

      <Input placeholder="Prénom" >
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>

      <Input placeholder="Numero d'identité national" >
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>

      <Input placeholder="Date de naissance" >
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>
      <Pressable style={tw`w-full items-center bg-bgreen py-3 mt-2 rounded-lg` } onPress={()=>setShow(false)}>
                    <Text  style={tw`text-white font-bold`}>Continue</Text>
      </Pressable>
    </View>
  )
}

const Page2=({setShow})=>{
  return(
    <View style={tw`w-5/6 items-center`}>
      <Input placeholder="E-mail" >
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>

      <Input placeholder="Telephone" >
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>
      <Input placeholder="Mot de passe" >
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>

      <Input placeholder="Mot de passe confirmation" >
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>
      <View style={tw`w-full  flex-row bg-bgreen items-center justify-end border-3 border-bgreen rounded-lg mt-2 shadow-lg overflow-hidden`}>
                <Pressable style={tw`w-1/2 items-center  ` } >
                    <Text  style={tw`w-full text-center text-black font-bold  bg-white py-2`} onPress={() => setShow(true)}>Précédent</Text>
                </Pressable>
                <Pressable style={tw`w-1/2 items-center ` } >
                    <Text  style={tw`text-white font-bold py-2 `} onPress={() => navigation.navigate('signup')}>Confirmer</Text>
                </Pressable>
      </View>
    </View>
  )
}