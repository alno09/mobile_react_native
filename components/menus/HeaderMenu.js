import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../../context/authContext'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderMenu = () => {
    const [state, setState] = useContext(AuthContext)
    
    // logout
    const handleLogout = () => {
        setState({user: null, token: ''});
        AsyncStorage.removeItem('@auth');
        alert('Logout Successfully')
    }

  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <FontAwesome5 name='sign-out-alt' style={Styles.iconStyle} />
      </TouchableOpacity>
    </View>
  )
}

const Styles = ({
    iconStyle: {
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 3,
        color: '#8B0000'
    }
})

export default HeaderMenu