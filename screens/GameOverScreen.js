import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native'
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={DefaultStyles.title}>
                    The Game is Over!
            </Text>
                <View style={styles.imageContainer}>
                    <Image
                        fadeDuration={1000}
                        source={require('../assets/success.png')}
                        //source={{ uri: 'https://ichef.bbci.co.uk/images/ic/640x360/p0659ssc.jpg' }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>

                <Text>
                    Number of rounds: {props.roundsNumber}
                </Text>
                <Text style={DefaultStyles.title}>Number was: <Text>{props.userNumber}</Text></Text>
                <Button title="NEW GAME" onPress={props.onRestart} />
            </View>
        </ScrollView>
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
        width: Dimensions.get('window').width > 600 * 0.7,
        height: Dimensions.get('window').width > 600 * 0.7,
        borderRadius: Dimensions.get('window').width > 600 * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    }
});

export default GameOverScreen;