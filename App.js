import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrdoductList from './ProductList';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

export default function App() {
  const user = {
    firstName: "Ana",
    lastName: "Mesquita"
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello, {formatName(user)}</Text>
      <StatusBar style="auto" />
      <PrdoductList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50,
  }
});
