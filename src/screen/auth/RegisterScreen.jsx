import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/context';
import { UserContext } from '../../context/context';
import axios from 'axios';

export function RegisterScreen({ navigation }) {

  const {login, setLogin} = useContext(LoginContext);
  const {user, setUser} = useContext(UserContext);

  const [identifiant, setIdentifiant] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const RegisterUser = () => {
      axios.post('https://digitalcampus.nerdy-bear.com/api/auth/local/register', {
        username: identifiant,
        email: email,
        password: password,
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
        setEmail('');
        setPassword('');
        Alert.alert('Veuillez réessayer')
      });
  }
    return (
      <View style={styles.container}>
      <View style={styles.viewRegister}>
        <Text>Inscription</Text>
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
          placeholder="Email"
          placeholderTextColor="#000000"
          value={email}
          onChangeText={setEmail}
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
        <Pressable onPress={() => RegisterUser()}><Text>S'inscrire</Text></Pressable>
        <Button
          title="Se connecter"
          onPress={() => navigation.navigate('Login')}
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