import tw from '../style/twrnc'
import { Text, View, TouchableWithoutFeedback,Image} from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

const Dashboard = ({navigation,user}) => {
  return (
      <View style={tw`w-full h-full`}>
        <View  style={tw`w-full h-3/7 bg-bgreen justify-center items-center `}>
          <Image style={tw``} source={require('../img/icon-patient.png')} />
          <Text style={tw`text-white font-nun-bold text-2xl my-1 `}>{user.first_name} <Text style={tw`uppercase`}>{user.last_name}</Text></Text>
          <Text style={tw`text-white font-nun-bold text-2xl `}>Bienvenue</Text>
        </View>
        <View style={tw`flex-row  w-full justify-center  px-5 pt-10`}>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Visits')}>
            <View style={tw`bg-white w-32 h-32 justify-center items-center rounded-lg mr-10`}>
              <Image style={tw``} source={require('../img/visit.png')} />
              <Text style={tw`text-bmove font-nun-bold text-lg my-1 `}>Diagnostic</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Prescriptions')}>
            <View style={tw`bg-white w-32 h-32 justify-center items-center rounded-lg`}>
            <Image style={tw``} source={require('../img/prescription.png')} />
              <Text style={tw`text-bgreen font-nun-bold text-lg my-1 `}>Ordonnance</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={tw`flex-row  w-full justify-center  mt-10 px-5`}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('Bills')}>
          <View style={tw`bg-white w-32 h-32 justify-center items-center rounded-lg mr-10`}>
            <Image style={tw``} source={require('../img/bill.png')} />
            <Text style={tw`text-yellow font-nun-bold text-lg my-1 `}>Factures</Text>
          </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Files')}>
            <View style={tw`bg-white w-32 h-32 justify-center items-center rounded-lg`}>
                <Image style={tw``} source={require('../img/radio.png')} />
                <Text style={tw`text-bleu font-nun-bold text-lg my-1 `}>Fichier</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
  )
}


const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps,null) (Dashboard)