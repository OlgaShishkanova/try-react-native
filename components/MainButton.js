import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

// we don't need this file in real apps, because they will take files with .androd and .ios names
const MainButton = props => {
 
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {props.children}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;