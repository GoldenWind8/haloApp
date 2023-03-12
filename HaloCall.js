import {StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import Deeplink from "./Deeplink";

export default function HaloCall() {
  var myHeaders = new Headers();
  const [intentResponse, setIntentResponse] = useState(null);
  myHeaders.append("x-api-key", "KzI3NzY4NzYzOTM3LjU5NTE3NzAxLWQ5MjYtNDczZS05YzkxLWZjYTY2NmU1NmYxMA==");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "amount": 13,
    "merchantId": 537,
    "paymentReference": "qwerty",
    "currencyCode": "ZAR",
    "timestamp": "Wed Oct 19 2022 15:41:40 GMT+0300"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };


  useEffect(() => {
    fetch("https://kernelserver.prod.haloplus.io/1.0.8/consumer/intentTransaction", requestOptions)
        .then(response => response.text())
        .then((result) => {
          const parsedResponse = JSON.parse(result);
          setIntentResponse(parsedResponse);
        })
        .catch(error => console.log('error', error));

  }, []);

  return (
    <View style={styles.container}>
      <Text>[Remove] This is where the intent call is made</Text>
      {intentResponse && <Text>{intentResponse.id}</Text>}
      <Deeplink amount={20}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8ffb3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
