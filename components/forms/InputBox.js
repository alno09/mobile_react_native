import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({
    inputTitle,
    autoComplete,
    keyboardType,
    secureTextEntry = false,
    value,
    setValue
}) => {
  return (
    <View>
        <Text>{ inputTitle }</Text>
        <TextInput
        style={styles.inputBox}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    inputBox: {
        marginBottom: 10,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        color: '#000000',
    }
})

export default InputBox