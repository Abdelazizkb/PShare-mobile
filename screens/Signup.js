import { StyleSheet, Text, View, Pressable, TextInput, Modal ,Alert,TouchableWithoutFeedback,Keyboard,Image} from 'react-native';
import React,{useState,useEffect} from 'react'
import tw from '../style/twrnc';
import Input from '../components/Input';
import { FontAwesome } from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons'
import { connect } from 'react-redux';
import { signUp } from '../actions/auth';
import { Ionicons } from '@expo/vector-icons';

const Signup = ({navigation,isAuthenticated,signedup,signUp}) => {
  const [show, setShow] = useState(true)
  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [inn, setInn] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [birthday, setBirthday] = useState("")
  const [password, setPassword] = useState("")
  const [re_password, setRe_password] = useState("")

  const signup1 = {setFirst_name,setLast_name,setInn,setBirthday}
  const signup2 = {setEmail,setPhone,setPassword,setRe_password}

  useEffect(() => {

  }, [])

  const handleSubmit = () =>{
    console.log(2)
    signUp(email,first_name,last_name,birthday,phone,inn,password,re_password)
  }

  if(isAuthenticated)
    navigation.navigate('Drawer')
  if(signedup){
    return (
      <TouchableWithoutFeedback onPress={()=>navigation.navigate('login')} accessible={false}>
        <View style={tw`w-full h-full items-center justify-center`}>
          <Ionicons name="checkmark-done-circle" size={80} color="#0FC2C0" />
          <Text style={tw`text-gray-600 text-center font-nun-bold text-xl mt-4`}>Vous avez été inscrit</Text>
          <Text style={tw`text-gray-500 text-center font-nun-bold  mt-2`}>Vous recevrez un e-mail de confirmation</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  else {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View  style={tw`flex w-full h-full items-center justify-center`}>
            <View style={tw`w-full items-center justify-center`}>
                  <Text style={tw`font-nun-bold text-4xl text-bgreen`}>Inscrez vous</Text>
                  <Text style={tw`font-nun-bold text-2xl my-2`}>Bienvenue, abonnez-vous et</Text>
                  <Text style={tw`font-nun-bold text-2xl mb-4`}>gérez vos données médicales</Text>
            </View>
            {show && <Page1 setShow={setShow} methods={signup1}/>}
            {(!show) && <Page2 setShow={setShow} methods={signup2} handleSubmit={handleSubmit}/>}

            <View style={tw`w-full items-center  py-3 mt-2 rounded-lg` }>
                      <TouchableWithoutFeedback onPress={() => navigation.navigate('login')}>
                          <Text style={tw`text-bgreen font-nun-bold`}>Connexion</Text>
                      </TouchableWithoutFeedback>
            </View>

          </View>
      </TouchableWithoutFeedback>
    )
  }  
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  signedup: state.auth.signedup
});

export default connect(mapStateToProps,{signUp}) (Signup)

const Page1=({setShow,methods})=>{
  return(
    <View style={tw`w-5/6 items-center`}>
      <Input placeholder="Nom" setValue={methods.setLast_name}>
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>

      <Input placeholder="Prénom" setValue={methods.setFirst_name}>
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>

      <Input placeholder="Numero d'identité national" setValue={methods.setInn}>
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>

      <Input placeholder="Date de naissance" setValue={methods.setBirthday}>
          <FontAwesome style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="user" size={25} />
      </Input>
      <Pressable style={tw`w-full items-center bg-bgreen py-3 mt-2 rounded-lg` } onPress={()=>setShow(false)}>
                    <Text  style={tw`text-white font-nun-bold`}>Continue</Text>
      </Pressable>
    </View>
  )
}

const Page2=({setShow,methods,handleSubmit})=>{
  return(
    <View style={tw`w-5/6 items-center`}>
      <Input placeholder="E-mail" setValue={methods.setEmail}>
          <MaterialIcons style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="mail" size={25} />
      </Input>

      <Input placeholder="Telephone" setValue={methods.setPhone}>
          <MaterialIcons style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="phone" size={25} />
      </Input>
      <Input secure={true} placeholder="Mot de passe" setValue={methods.setPassword}>
          <MaterialIcons style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="security" size={25} />
      </Input>

      <Input secure={true} placeholder="Mot de passe confirmation" setValue={methods.setRe_password}>
          <MaterialIcons style={tw`bg-gray-300 h-full pt-3 px-4 text-gray-500`}  name="security" size={25} />
      </Input>
      <View style={tw`w-full  flex-row bg-bgreen items-center justify-end border-3 border-bgreen rounded-lg mt-2 shadow-lg overflow-hidden`}>
          <Pressable style={tw`w-1/2 items-center  ` } >
              <Text  style={tw`w-full text-center text-black font-nun-bold  bg-white py-2`} onPress={() => setShow(true)}>Précédent</Text>
          </Pressable>
          <Pressable style={tw`w-1/2 items-center ` } >
              <Text  style={tw`text-white font-nun-bold py-2 `} onPress={handleSubmit}>Confirmer</Text>
          </Pressable>
      </View>
    </View>
  )
}