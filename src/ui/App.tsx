import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import styles from './screens/styles/theme';

import {CalculadoraScreen} from './screens/CalculadoraScreen';

const App = () => {

  return (
    <SafeAreaView  style={styles.fondo}>
      <StatusBar 
        backgroundColor='#111'
        barStyle="light-content"
      />
      
      <CalculadoraScreen />

    </SafeAreaView>
  )

}

export default App;