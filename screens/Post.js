import { View, Text, StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../context/authContext'
import FooterMenu from '../components/menus/FooterMenu';

const Post = () => {
    // global state
    const [state, setState] = useContext(AuthContext);

  return (
    <View style={Styles.container}>
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
    }
  })

export default Post