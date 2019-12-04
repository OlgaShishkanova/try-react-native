import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView, FlatList, Dimensions } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card';
import {ScreenOrientation} from 'expo'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum;
    }
}

// const renderListItemForScroll = (value, numOfRound) => (
//     <View key={value} style={styles.listItem}>
//         <Text>#{numOfRound}</Text>
//         <Text>{value}</Text>
//     </View>
// )

const renderListItemForFLatList = (listLength, itemData) => (
    <View style={styles.listItem}>
        <Text>#{listLength - itemData.index}</Text>
        <Text>{itemData.item}</Text>
    </View>
)

const GameScreen = props => {

    //lock that screen in portrait orientation
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

    const initialGuess = generateRandomBetween(1, 99, props.userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()])
    const currentLow = useRef(1)
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;
    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice)
            || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }])
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess - 1;
        } else {
            currentLow.current = currentGuess + 1;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        //setRounds(currentRounds => currentRounds+1)
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses])
    }

    if (Dimensions.get('window').height < 500) {
        return (
            <View style={styles.screen}>
                <Text style={styles.headerTitle}>Opponent's Guess</Text>
                <View style={styles.controls}>
                <Button title="LOWER" onPress={() => { nextGuessHandler('lower') }} />
                <NumberContainer>{currentGuess}</NumberContainer>
                <Button title="GREATER" onPress={() => { nextGuessHandler('greater') }} />
                </View>

                <View style={styles.listContainer}>
                    {/* <ScrollView contentContainerStyle={styles.list}>
                {pastGuesses.map((guess, index) => renderListItemForScroll(guess, pastGuesses.length - index))}
            </ScrollView> */}
                    <FlatList
                        keyExtractor={(item) => item}
                        data={pastGuesses}
                        renderItem={renderListItemForFLatList.bind(this, pastGuesses.length)}
                        contentContainerStyle={styles.list}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.headerTitle}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => { nextGuessHandler('lower') }} />
                <Button title="GREATER" onPress={() => { nextGuessHandler('greater') }} />
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                {pastGuesses.map((guess, index) => renderListItemForScroll(guess, pastGuesses.length - index))}
            </ScrollView> */}
                <FlatList
                    keyExtractor={(item) => item}
                    data={pastGuesses}
                    renderItem={renderListItemForFLatList.bind(this, pastGuesses.length)}
                    contentContainerStyle={styles.list}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
        width: 300,
        maxWidth: '80%'
    },
    controls:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listContainer: {
        flex: 1,
        width: '60%'
    },
    list: {
        flexGrow: 1,
        //alignItems: "center",
        justifyContent: "flex-end"
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});

export default GameScreen;