import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React,{useContext, useState} from 'react'
import { AuthContext } from '../context/authContext'
import FooterMenu from '../components/menus/FooterMenu';
import axios from 'axios';

const Account = () => {
    // global state
    const [state, setState] = useContext(AuthContext);
    const {user} = state;

    // local state
    const [username, setUsername] = useState(user?.username)
    const [email, setEmail] = useState(user?.email)
    const [password, setPassword] = useState(user?.password)
    const [loading, setLoading] = useState(false)

    // handle update
    const handleUpdate = async () => {
      try {
        setLoading(true);
        const { data } = await axios.put("/auth/update-user", {
          username,
          password,
          email,
        });
        setLoading(false);
        let UD = JSON.stringify(data);
        setState({ ...state, user: UD?.updatedUser });
        alert(data && data.message);
      } catch (error) {
        alert(error.response.data.message);
        setLoading(false);
        console.log(error);
      }
    };

  return (
    <View style={Styles.container}>
      <ScrollView>
      <View>
        <Image source={{uri: 'https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png'}} style={{ height: 200, width: 200, alignSelf: 'center' }} />
      </View>
      <Text style={Styles.textDesc}>Tap to edit</Text>
      
      <View style={Styles.inputContainer}>
        <Text style={Styles.inputText}>Name :</Text>
        <TextInput style={Styles.inputBox} value={username} onChangeText={(text) => setUsername(text)} />
      </View>

      <View style={Styles.inputContainer}>
        <Text style={Styles.inputText}>Email :</Text>
        <TextInput style={Styles.inputBox} value={email} editable={false} onChangeText={(text) => setEmail(text)} />
      </View>

      <View style={Styles.inputContainer}>
        <Text style={Styles.inputText}>Password :</Text>
        <TextInput style={Styles.inputBox} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
      </View>

      <View style={Styles.inputContainer}>
        <Text style={Styles.inputText}>Role :</Text>
        <TextInput style={Styles.inputBox} value={state?.user.role} editable={false} />
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={Styles.updateBtn} onPress={handleUpdate}>
          <Text style={Styles.updateTxt}>{loading ? 'Please wait' : 'Update Profile'}</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <FooterMenu />
        </View>
    </View>
  )
}

const Styles = ({
    container: {
      flex: 1,
      justifyContent: "space-between",
      margin: 10,
      marginTop: 40
    },
    textDesc: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      color: 'red'
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      alignItems: 'center'
    },
    inputText: {
      fontWeight: 'bold'
    },
    inputBox: {
      width: 250,
      backgroundColor: '#ffffff',
      marginLeft: 10,
      fontSize: 13,
      paddingLeft: 8,
      borderRadius: 100
    },
    updateBtn: {
      backgroundColor: 'black',
      marginTop: 20,
      width: 150,
      alignItems: 'center',
      height: 40,
      borderRadius: 200,
      justifyContent: 'center'
    },
    updateTxt: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold'
    }
  })

export default Account