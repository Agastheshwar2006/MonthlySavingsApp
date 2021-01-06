import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import IncomeScreen from './screens/IncomeScreen';


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  IncomeScreen:{screen: IncomeScreen},
  
})

const AppContainer =  createAppContainer(switchNavigator);
