import { View, Text,Image } from 'react-native'
import React from 'react'
import tw from '../style/twrnc';

const Empty = ({text}) => {
  return (
    <View style={tw`flex w-full h-full items-center justify-center`}>
        <Image style={tw`-mt-20`} source={require('../img/empty.png')} />
        <Text  style={tw`text-gray-700/90 font-nun-bold text-lg mt-2`}>il y a  {text}</Text>
    </View>
  )
}

export default Empty