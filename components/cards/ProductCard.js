import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";
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
        width: '100%',
        maxWidth: '100%',
        marginVertical: 20,

        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
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
    offPercentageContainer: {
        position: 'absolute',
        width: '20%',
        height: '24%',
        backgroundColor: COLOURS.green,
        top: 0,
        left: 0,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    offPercentageText: {
        fontSize: 12,
        color: COLOURS.white,
        fontWeight: 'bold',
        letterSpacing: 1,
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