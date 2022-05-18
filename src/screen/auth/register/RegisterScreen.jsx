import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../../context/context';
import { UserContext } from '../../../context/context';
import axios from 'axios';

import { styles } from '../../../style/global.style'
import { style } from './Register.style'

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
        <View style={style.viewTitle}>
          <Text style={style.viewTitleText}>Inscription</Text>
        </View>
        <View style={style.viewRegister}>
          <TextInput 
            style={style.viewRegisterInput}
            placeholder="Identifiant"
            placeholderTextColor="#FFFFFF"
            value={identifiant}
            onChangeText={setIdentifiant}
            required
          />
          <TextInput 
            style={style.viewRegisterInput}
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            value={email}
            onChangeText={setEmail}
            required
          />
          <TextInput 
            style={style.viewRegisterInput}
            placeholder="Mot de passe"
            placeholderTextColor="#FFFFFF"
            value={password}
            onChangeText={setPassword}
            required
            secureTextEntry={true}
          />
          <Pressable style={style.viewRegisterSubmit} onPress={() => RegisterUser()}>
            <Text  style={style.viewRegisterSubmitText}>S'inscrire</Text>
          </Pressable>
        </View>

        <View style={style.viewNoAccount}>
          <Text style={style.viewNoAccountText}>Vous avez déja un compte ?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}><Text  style={style.viewNoAccountLink}>Connectez-vous</Text></Pressable>
        </View>
      </View>
    );
  }