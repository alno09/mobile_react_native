import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';

const FooterMenu = () => {
    const navigation = useNavigation()
    const route = useRoute()

  return (
    <View style={Styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <FontAwesome5 name='home' style={Styles.iconStyle} color={route.name === 'Home' && 'green'} />
            <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Post')}>
            <FontAwesome5 name='plus-circle' style={Styles.iconStyle} color={route.name === 'Post' && 'green'} />
            <Text>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <FontAwesome5 name='info' style={Styles.iconStyle} color={route.name === 'About' && 'green'} />
            <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <FontAwesome5 name='user-alt' style={Styles.iconStyle} color={route.name === 'Account' && 'green'} />
            <Text>Account</Text>
        </TouchableOpacity>
    </View>
  )
}

const Styles = ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 3
    }
})

export default FooterMenu