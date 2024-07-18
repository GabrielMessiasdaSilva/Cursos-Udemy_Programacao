// App.js
import React from 'react';
import { StyleSheet,View } from 'react-native';
import Home from './src/telas/Home';

const App = () => {
  return (
    <View style={styles.header}>
      <Home />
    </View>
  );
};


const styles = StyleSheet.create({
    header: {
      flex: 5,
  
    }   });
export default App;
