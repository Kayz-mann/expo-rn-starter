import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})