import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>
                The Game is Over!
            </Text>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    //source={require('../assets/success.png')}
                    source={{ uri: 'https://ichef.bbci.co.uk/images/ic/640x360/p0659ssc.jpg' }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>

            <Text>
                Number of rounds: {props.roundsNumber}
            </Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    }
});

export default GameOverScreen;