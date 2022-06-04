import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// local imports here.....................................................
import InputComponent from './components/inputComponent';
import DisplayComponent from './components/displayComponent';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
     
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            marginBottom:10,
          }}>  
             <Text style={styles.heading}>TO DO APP</Text>
             <InputComponent/>
        </View>
        <DisplayComponent/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    heading:{
       fontSize:30,
       color:'black',
       fontWeight:'bold',
       textAlign:'center',
       marginTop:50,
      //  backgroundColor:'pink',
      fontFamily:'serif',
    }
});

export default App;
