import React, {useEffect, useState} from 'react';
import {Linking, Text, View} from "react-native";

function Deeplink(props) {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "KzI3NzY4NzYzOTM3LjU5NTE3NzAxLWQ5MjYtNDczZS05YzkxLWZjYTY2NmU1NmYxMA==");
    myHeaders.append("Content-Type", "application/json");

    const [url, setUrl] = useState("");

    var raw = JSON.stringify({
        "amount": 15,
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
            })
            .catch(error => console.log('error', error));
    }, []);



    return (
        <View>
            <Text style={{color: 'blue'}}
                  onPress={() => Linking.openURL(url)}>
                {url}
            </Text>
        </View>
    );
}

export default Deeplink;