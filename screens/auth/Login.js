import { View, Text, Alert } from 'react-native'
import React, {useState, useContext} from 'react'
import { AuthContext } from '../../context/authContext'
import InputBox from '../../components/forms/InputBox'
import SubmitButton from '../../components/forms/SubmitButton'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    // global state
    const [state, setState] = useContext(AuthContext)

    // state
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
      try {
        setLoading(true)
        if ( !email || !password) {
          Alert.alert('Please fill all fields');
          setLoading(false);
          return;
        }
        setLoading(false);
        const { data } = await axios.post('/auth/login', { email, password })
        setState(data)
        await AsyncStorage.setItem('@auth', JSON.stringify(data));
        alert(data && data.message);
        navigation.navigate('Home');
        console.log('login Data==> ', { email, password });
      } catch (error) {
        alert(error.response.data.message)
        setLoading(false);
        console.log(error);
      }
    }
    // temp function to check local storage
    const getLocalStorageData = async () => {
      let data = await AsyncStorage.getItem('@auth')
      console.log('Local Storage ==> ', data);
    }
    getLocalStorageData();
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
        inputTitle='Email:'
        keyboardType='email-address'
        autoComplete='email'
        value={email}
        setValue={setEmail} />
        <InputBox
        inputTitle='Password:'
        secureTextEntry={true}
        autoComplete='password'
        value={password}
        setValue={setPassword} />
      </View>
      {/* <Text>{JSON.stringify({username, email, password}, null, 4)}</Text> */}
      <SubmitButton btnTitle='Login' loading={loading} handleSubmit={handleSubmit} />
      <Text style={styles.linkText}>
        Not a user?{" "} Please <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Register</Text>
      </Text>
    </View>
  )
}

const  styles = ({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF8DC'
    },
    pageTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
        marginBottom: 20
    },
    linkText: {
      textAlign: 'center',
    },
    link: {
      color: '#DC143C'
    }
})

export default Login