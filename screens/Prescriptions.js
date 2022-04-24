import { ScrollView, Text, View, Pressable, TextInput, FlatList ,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard,Image} from 'react-native';
import tw from '../style/twrnc';
import { connect } from 'react-redux';
import {useEffect} from 'react';
import {loadPrescriptions} from '../actions/ehr'
import Empty from '../components/Empty';


const Prescriptions = ({prescriptions,loadPrescriptions}) => {
  useEffect(() => {
    loadPrescriptions()
}, [])

if(prescriptions.length==0) 
  return <Empty text="aucune ordonnance" />

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView>
        <View  style={tw`flex w-full items-center`}>
                <View  style={tw`w-full  p-5  justify-center items-center `}>
                    <View style={tw`w-32 h-32 bg-white rounded-full border-2 border-bgreen  justify-center items-center`}>
                        <Image style={tw``} source={require('../img/prescription.png')} />
                    </View>
                <Text style={tw`font-nun-bold text-gray-600 mt-4 text-lg`}>Vos ordonnances</Text>
                </View>
                <View style={tw`w-5/6`}>
                { users.map((item,index)=>(
                        <TouchableOpacity key={index}>
                            <View style={tw`w-full bg-white h-20 my-2 rounded-lg p-2 border-l-3 border-bgreen shadow-md flex-row items-center justify-around`}>
                                    <Image style={tw``} source={require('../img/doctor.png')} />
                                    <View style={tw`-ml-4 mr-4`}>
                                        <Text style={tw`font-nun-bold mb-2`}>Abdelaziz...</Text>
                                        <Text style={tw`font-nun-bold text-gray-500`}>Cardiologue</Text>
                                    </View>
                                    <Text style={tw`font-nun-bold`}>28-10-2015</Text>
                            </View>
                        </TouchableOpacity>
                        ))
                }
                </View>
        </View>
        </ScrollView>
    </TouchableWithoutFeedback>
  )
}



const mapStateToProps = state => ({
  prescriptions: state.ehr.prescriptions
});

export default connect(mapStateToProps,{loadPrescriptions})  (Prescriptions)