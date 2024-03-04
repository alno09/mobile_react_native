import { View, Text, Alert } from 'react-native'
import React, {useState} from 'react'
import InputBox from '../../components/forms/InputBox'
import SubmitButton from '../../components/forms/SubmitButton'
import axios from 'axios'

const Register = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
      try {
        setLoading(true)
        if (!username || !email || !password) {
          Alert.alert('Please fill all fields');
          setLoading(false);
          return;
        }
        setLoading(false);
        const { data } = await axios.post('/auth/register', { username, email, password });
        alert(data && data.message);
        navigation.navigate('Login');
        console.log('Register Data==> ', { username, email, password });
      } catch (error) {
        alert(error.response.data.message)
        setLoading(false);
        console.log(error);
      }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
        inputTitle='Username:'
        value={username}
        setValue={setUsername}  />
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
      <SubmitButton btnTitle='register' loading={loading} handleSubmit={handleSubmit} />
      <Text style={styles.linkText}>
        Already registered?{" "} Please <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Login</Text>
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
      color: '#00BFFF'
    }
})

export default Register