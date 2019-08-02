import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const PlaceInput = ({ changeHandler, submitHandler, text }) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.placeInput}
            placeholder="Add an awesome place!"
            onChangeText={changeHandler}
            value={text} />
        <Button
            title="Add"
            style={styles.placeButton}
            onPress={submitHandler} />
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});

export default PlaceInput;