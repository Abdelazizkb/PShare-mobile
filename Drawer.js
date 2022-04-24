
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from "./screens/Dashboard"
import Account from './screens/Account';
import Bills from './screens/Bills';
import Visits from './screens/Visits';
import Prescriptions from './screens/Prescriptions';
import Files from './screens/Files';
import {connect} from 'react-redux';

const Draw = createDrawerNavigator();

function Drawer() {

  
  return (
      <Draw.Navigator initialRouteName="Dashboard" screenOptions={{headerStyle:{backgroundColor:"#0FC2C0" },headerTintColor: 'white',fontFamily:"nunito-bold" }}>
        <Draw.Screen name="Dashboard" component={Dashboard} />
        <Draw.Screen name="Visits" component={Visits} options={{title:"Visites"}} />
        <Draw.Screen name="Prescriptions" component={Prescriptions} options={{title:"Ordonnances"}} />
        <Draw.Screen name="Files" component={Files} options={{title:"Fichiers"}} />
        <Draw.Screen name="Bills" component={Bills} options={{title:"Factures"}}/>
        <Draw.Screen name="Account" component={Account} options={{title:"Profile" }}/>
      </Draw.Navigator>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default Drawer