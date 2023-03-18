import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Cart(props) {
    return (
        <View>
            <Text>Cart Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
});

export default Cart;