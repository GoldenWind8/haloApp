import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import {COLOURS} from "./database/Database";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CartItem({data}) {
    return (
        <TouchableOpacity
            key={data.key}
            /*onPress={/!*() =>
                navigation.navigate('ProductInfo', { productID: data.id })*!/
            }*/
            style={styles.container}
        >
            <View style={styles.imageContainer}>
                <Image source={data.productImage} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.productName}>{data.productName}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>
                            R{data.productPrice}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    /*onPress={/!*() => removeItemFromCart(data.id)*!/}*/
                    style={styles.deleteButton}
                >
                    <MaterialCommunityIcons
                        name="delete-outline"
                        style={styles.removeButton}
                    />

                    <View style={styles.quantityContainer}>
                        <View style={styles.quantityButton}>
                            <MaterialCommunityIcons
                                name="minus"
                                style={{
                                    fontSize: 16,
                                    color: COLOURS.backgroundDark,
                                }}
                            />
                        </View>
                        <Text style={styles.quantityText}>1</Text>
                        <View style={styles.quantityButton}>
                            <MaterialCommunityIcons
                                name="plus"
                                style={{
                                    fontSize: 16,
                                    color: COLOURS.backgroundDark,
                                }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}


const styles = {
    container: {
        width: '100%',
        height: 100,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: '30%',
        height: '100%',
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOURS.backgroundLight,
        borderRadius: 10,
        marginRight: 22,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    infoContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'flex-start',
    },
    productName: {
        fontSize: 14,
        maxWidth: '100%',
        color: COLOURS.black,
        fontWeight: '600',
        letterSpacing: 1,
    },
    priceContainer: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.6,
    },
    price: {
        fontSize: 14,
        fontWeight: '400',
        maxWidth: '85%',
        marginRight: 4,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        borderRadius: 100,
        marginRight: 20,
        padding: 4,
        borderWidth: 1,
        borderColor: COLOURS.backgroundMedium,
        opacity: 0.5,
    },
    quantityText: {
        fontSize: 14,
    },
    removeButton: {
        fontSize: 16,
        color: COLOURS.backgroundRed,
        backgroundColor: COLOURS.backgroundLight,
        padding: 8,
        borderRadius: 100,
    },
    deleteButton: {
        padding: 0,
        opacity: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }


};

export default CartItem;