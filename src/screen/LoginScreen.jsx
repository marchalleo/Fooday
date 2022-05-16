import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../context/context';
import { UserContext } from '../context/context';
import axios from 'axios';

export function LoginScreen({ navigation }) {

  const {login, setLogin} = useContext(LoginContext);
  const {user, setUser} = useContext(UserContext);

  const [identifiant, setIdentifiant] = useState('');
  const [password, setPassword] = useState('');

  const LoginUser = () => {
      axios.post('https://digitalcampus.nerdy-bear.com/api/auth/local', {
        identifier: identifiant,
        password: password
      })
      .then(function (response) {
        console.log(response.data);
        setLogin(1);
        const {data} = response;
        setUser({
          id: data.user.id,
          username: data.user.username,
          email: data.user.email,
          jwt: data.jwt,
        });//on set dans le context User ses informations
      })
      .catch(function (error) {
        console.log(error);
        setIdentifiant('');
        setPassword('');
        Alert.alert('Identifiant ou mot de passe incorrect')
      });//si le password est incorrect, on reset les inputs et affiche une alert
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewRegister}>
        <Text>Connexion</Text>
        <TextInput 
          style={styles.inputRegister}
          placeholder="Identifiant"
          placeholderTextColor="#000000"
          value={identifiant}
          onChangeText={setIdentifiant}
          required
        />
        <TextInput 
          style={styles.inputRegister}
          placeholder="Mot de passe"
          placeholderTextColor="#000000"
          value={password}
          onChangeText={setPassword}
          required
          secureTextEntry={true}
        />
        <Pressable onPress={() => LoginUser()}><Text>Se connecter</Text></Pressable>
        <Button
          title="S'inscrire"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
    },
    viewRegister: {
      width: '80%',
      height: '40%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputRegister: {
      width: '80%',
      height: '15%',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      color: '#132851',
      marginTop: 5,
      marginBottom: 5,
    },

  });