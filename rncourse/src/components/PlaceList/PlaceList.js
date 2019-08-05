import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlaceList = ({ places }) => {
    const placesOutput = places.map((place, i) => (
        <ListItem
            key={i}
            text={place}
            onItemPressed={() => alert('Item pressed - ID: ' + i)} />
    ));

    return (
        <View style={styles.placesContainer}>
            {placesOutput}
        </View>
    );
};

const styles = StyleSheet.create({
    placesContainer: {
        width: "100%"
    }
});

export default PlaceList;