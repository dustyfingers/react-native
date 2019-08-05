import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const ListItem = ({ text, onItemPressed }) => (
    <TouchableNativeFeedback onLongPress={onItemPressed}>
        <View style={styles.listItem}>
            <Text>{text}</Text>
        </View>
    </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#eee"
    }
});

export default ListItem;