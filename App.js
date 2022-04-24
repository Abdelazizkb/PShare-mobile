import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home"
import Login from './screens/Login';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';
import Navigator from './Stack';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from "./Drawer"
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
import {useEffect,useState} from 'react'
import { Provider } from 'react-redux';
import store from './store';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./fonts/Nunito-Bold.ttf'),
});

const Stack = createStackNavigator()

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    getFonts()
  }, [])
  
  if (fontsLoaded) {
  return (
      <NavigationContainer>
        <Provider store={store}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Drawer" component={Drawer} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
        </Provider>
      </NavigationContainer>
  );
  }else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onError={() => setFontsLoaded(true)}
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
