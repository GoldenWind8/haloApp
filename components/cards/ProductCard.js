import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {COLOURS} from "../database/Database";

function ProductCard({navigation, data}) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
            style={styles.container2}>
            <View style={styles.productImageContainer}>
                <Image source={data.productImage} style={styles.productImage} />
            </View>
            <Text style={styles.productName}>{data.productName}</Text>
            {
                data.isAvailable ? (
                    <View style={styles.availableContainer}>
                        <FontAwesome
                            name="circle"
                            style={[styles.availableIcon, {color: COLOURS.green}]}
                        />
                        <Text style={[styles.availableText, {color: COLOURS.green}]}>
                            Available
                        </Text>
                    </View>
                ) : (
                    <View style={styles.availableContainer}>
                        <FontAwesome
                            name="circle"
                            style={[styles.availableIcon, {color: COLOURS.red}]}
                        />
                        <Text style={[styles.availableText, {color: COLOURS.red}]}>
                            Unavailable
                        </Text>
                    </View>
                )
            }
            <Text style={styles.priceText}>R {data.productPrice}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container2: {
        width: 160,
        maxWidth: '100%',
        marginVertical: 20,
    },
    productImageContainer: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    productImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 12,
        color: COLOURS.black,
        fontWeight: '600',
        marginBottom: 2,
        flexWrap:'wrap',
    },
    availableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    availableIcon: {
        fontSize: 12,
        marginRight: 6,
    },
    availableText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    priceText: {
        fontWeight: 'bold',
    },
});
export default ProductCard;