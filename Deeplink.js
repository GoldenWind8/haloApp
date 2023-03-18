import React, {useEffect, useState} from 'react';
import {StyleSheet, Linking, Text, TouchableOpacity, View} from "react-native";
import {COLOURS} from "./components/database/Database";

function Deeplink({amount}) {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "KzI3NzY4NzYzOTM3LjU5NTE3NzAxLWQ5MjYtNDczZS05YzkxLWZjYTY2NmU1NmYxMA==");
    myHeaders.append("Content-Type", "application/json");

    const [url, setUrl] = useState("google.com");

    var raw = JSON.stringify({
        "amount": amount,
        "merchantId": 182,
        "paymentReference": "qwerty",
        "currencyCode": "ZAR",
        "timestamp": "Wed Oct 19 2022 15:41:40 GMT+0300",
        "isConsumerApp": true,
        "image": {
            "required": false
        }
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    useEffect(() => {
        fetch("https://kernelserver.prod.haloplus.io/1.0.12/consumer/qrCode", requestOptions)
            .then(response => response.text())
            .then(result => {
                const deepLink = JSON.parse(result).url;
                setUrl(deepLink);
                console.log("Hi"+deepLink);
            })
            .catch(error => console.log('error', error));
    }, []);

    const handlePress = () => {
        Linking.openURL(url);
    };

    return (
            <View style={styles.addToCartButton}>
                <TouchableOpacity
                    onPress={() => Linking.openURL(url)}
                    style={styles.addToCartButtonContainer}>
                    <Text style={styles.addToCartButtonText}>
                        Pay With Halo
                    </Text>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    addToCartButton: {
        position: 'absolute',
        bottom: 10,
        height: '8%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCartButtonContainer: {
        width: '86%',
        height: '90%',
        backgroundColor: COLOURS.blue,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCartButtonText: {
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 1,
        color: COLOURS.white,
        textTransform: 'uppercase',
    },
})

export default Deeplink;