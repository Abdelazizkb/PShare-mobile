import { View, TextInput } from 'react-native'
import {useState} from 'react';
import tw from '../style/twrnc';
import {MaterialIcons} from '@expo/vector-icons'

const Input = ({setValue,placeholder,children,secure=false}) => {
  const [isFocused, setIsFocused] =useState(false)

  return (
    <View style={tw`flex-row  mt-1 mb-4 overflow-hidden rounded-sm`}>
        {children}
        <TextInput  style={tw`p-2 pl-5 h-full  bg-gray-100 flex-1 border-2  w-full items-center ${isFocused? "border-bgreen" : "border-gray-300"}`}
            placeholder={placeholder}
            onChangeText={(val)=>{setValue(val)}} onBlur={()=>setIsFocused(false)}
            onFocus={()=>setIsFocused(true)}
            secureTextEntry={secure}/>
    </View>
  )
}


export default Input