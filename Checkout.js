import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CartItem from "./components/CartItem";
import * as Database from "./components/database/Database";
import Deeplink from "./Deeplink";

const Checkout = () => {
    const [data, setData] = useState(items);


    return (
        <View style={styles.container}>
            <Text style = {styles.totalText}>Checkout</Text>
            <View style={styles.itemsContainer}>
                {
                    data.map((item) =>
                    {
                        return(
                            <CartItem data={item}/>
                        );
                    })
                }
            </View>
            <Deeplink amount={10}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    itemsContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    totalText: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    }
});

const items = Database.Items;

export default Checkout;
