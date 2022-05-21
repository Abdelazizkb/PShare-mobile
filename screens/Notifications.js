import { View, Text,Pressable,Modal,TextInput, ScrollView ,TouchableWithoutFeedback,Keyboard,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import tw from '../style/twrnc'

export default function Notifications({show,setShow,request}) {
    const [message,setMessage] = useState({inn:""})
    const [isFocused, setIsFocused] =useState(false)

    useEffect(() => {
        try{
            setMessage(JSON.parse(request.data).message)
        }
        catch (err) {}
    }, [request])
    
  return (
    <Modal visible={show}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={tw`w-full h-full `}>
            <View>
                <Pressable style={tw`w-full items-end py-1 mt-1 rounded-lg` } onPress={() =>{setShow(false)}}>
                    <Text  style={tw`font-nun-bold font-nun-bold text-xl pr-3`}>X</Text>
                </Pressable>
            </View>
            <ScrollView>
                <View  style={tw`w-full pt-5 justify-center items-center `}>
                <Image style={tw`h-28 w-28 border-2 border-bgreen rounded-full `} source={require('../img/profile4.png')} />
                <Text style={tw`font-nun-bold text-gray-600 mt-4 `}>le médecin veut accéder à vos données </Text>
                </View>
                <View style={tw`w-full justify-center  px-5  `}>
                    <View pointerEvents='none'>
                        <Text style={tw`font-nun-bold text-gray-600 mt-5 mb-1`}>Nom complet</Text>
                        <TextInput value={message.last_name+" "+message.first_name} style={tw`p-2 pl-8 h-12  rounded-lg  border-2  w-full ${isFocused? "border-bgreen" : "border-gray-300"}`}
                            placeholder="Email"/>
                    </View>     
                    <View pointerEvents='none'>
                        <Text style={tw`font-nun-bold text-gray-600 mt-4 mb-1`}>Inn</Text>
                        <TextInput value={message.inn} style={tw`p-2 pl-8 h-12  rounded-lg  border-2  w-full ${isFocused? "border-bgreen" : "border-gray-300"}`}
                            placeholder="Email"/>
                    </View>        
                    <View pointerEvents='none'>
                        <Text style={tw`font-nun-bold text-gray-600 mt-4 mb-1`}>Téléphone</Text>
                        <TextInput value={message.phone} style={tw`p-2 pl-8 h-12  rounded-lg  border-2  w-full ${isFocused? "border-bgreen" : "border-gray-300"}`}
                            placeholder="Email"/>
                    </View>        
                    <View pointerEvents='none'>
                        <Text style={tw`font-nun-bold text-gray-600 mt-4 mb-1`}>E-mail</Text>
                        <TextInput value={message.email} style={tw`p-2 pl-8 h-12  rounded-lg  border-2  w-full ${isFocused? "border-bgreen" : "border-gray-300"}`}
                            placeholder="Email"/>
                    </View>           
                <View style={tw`w-4/6 mx-auto  flex-row bg-red-500 items-center justify-end  rounded-lg mt-6 shadow-lg overflow-hidden`}>
                  <Pressable style={tw`w-1/2 items-center  ` } >
                      <Text  style={tw`w-full text-center text-black text-lg font-nun-bold  bg-bgreen text-white  py-2`}>✓</Text>
                  </Pressable>
                  <Pressable style={tw`w-1/2 items-center ` } >
                      <Text  style={tw`text-white font-nun-bold py-2 bg-red-500 `} >X</Text>
                  </Pressable>
                </View>
                </View>
            </ScrollView>
        </View>
        </TouchableWithoutFeedback>
    </Modal>
  )
}