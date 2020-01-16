import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class UserImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={{uri: 'https://i.kym-cdn.com/photos/images/original/000/456/353/05a.jpg'}}
                />
                <Text style={styles.name}>Nicholas Cage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
    },

    name: {
        padding: 10,
        fontSize: 20,
        color: '#fff',
    }

});