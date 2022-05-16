import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export function RegisterScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Go to Details... again" onPress={() => navigation.push('Details')}/>
      </View>
    );
  }