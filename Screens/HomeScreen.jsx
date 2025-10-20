import { use } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <Text>HomeScreen</Text>          
        <Button onPress={() => navigation.navigate('Cat')} title="Go to the cat screen" />
      </View>
    );
  }

  const styles = StyleSheet.create({
  });