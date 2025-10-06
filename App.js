import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React from 'react';

export default function App() {
    const [text, onChangeText] = React.useState('Useless Text');


  return (
    <View style={styles.container}>
      <Text>Emily og Victor er i gruppe sammen med Elisabeth</Text>
      <StatusBar style="auto" />
      
      <Button
          title="Nej!"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  // container svarer til en css klasse
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'gray',
  },
});
