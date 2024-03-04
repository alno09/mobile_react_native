import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = ({ handleSubmit, btnTitle, loading }) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.btnTest}>
            { loading ? 'Please wait...' : btnTitle}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: '#1e2225',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 80,
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    btnTest: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '400',
    }
})

export default SubmitButton