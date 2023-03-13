import React, { useState } from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {

    console.log(`Iniciando sesión con email: ${email} y contraseña: ${password}`);
  };

  return (


    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../../assets/logo.png')}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button
          title="Login"
          onPress={handleLogin}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 5,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
  },
});

export default LoginScreen;
