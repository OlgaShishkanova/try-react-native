import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input}/>
        <Button title="ADD" onPress={() => setOutputText('The text is changed')}/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer:{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  input: {width: '80%',borderBottomColor: 'black', borderWidth: 1, padding: 10}
});
