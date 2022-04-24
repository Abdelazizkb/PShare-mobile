/* import { ScrollView, Text, View, Pressable, TextInput, FlatList ,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard,Image} from 'react-native';
import tw from '../style/twrnc';

const users  =[
    {
      name:"aziz",
      age:"23",
      key:"1"
    },
    {
        name:"aziz",
        age:"23",
        key:"2"
      },
    {
    name:"aziz",
    age:"23",
    key:"3"
    },
    {
    name:"aziz",
    age:"23",
    key:"4"
    },
    {
    name:"aziz",
    age:"23",
    key:"5"
    },
    {
        name:"aziz",
        age:"23",
        key:"6"
        },
  ]

const Bills = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView>
            <View  style={tw`flex w-full items-center`}>
                    <View  style={tw`w-full  p-5  justify-center items-center `}>
                        <View style={tw`w-32 h-32 bg-white rounded-full border-2 border-bgreen  justify-center items-center`}>
                            <Image style={tw``} source={require('../img/bill.png')} />
                        </View>
                    <Text style={tw`font-nun-bold text-gray-600 mt-4 text-lg`}>Vos factures</Text>
                    </View>
                    <View style={tw`w-5/6`}>
                        <FlatList
                        data={users}
                        keyExtractor={item=>(item.key)}
                        renderItem={({item})=>(
                        <View style={tw`w-full bg-white h-20 my-2 rounded-lg p-2 border-l-2 border-bgreen shadow-md`}>  
                            <TouchableOpacity>
                                <Text>h</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                        />
                    </View>
            </View>
        </ScrollView>
    </TouchableWithoutFeedback>
  )
}




export default Bills */