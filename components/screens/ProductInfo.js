import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, Image, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductInfo = ({route, navigation}) => {
    const {productID} = route.params;

    const [product, setProduct] = useState({});

    const width = Dimensions.get('window').width;


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
        });

        return unsubscribe;
    }, [navigation]);

    //get product data by productID

    const getDataFromDB = async () => {
        for (let index = 0; index < Items.length; index++) {
            if (Items[index].id == productID) {
                await setProduct(Items[index]);
                return;
            }
        }
    };


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle="dark-content"/>
            <ScrollView>
                <View style={styles.infoContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack('Home')}>
                            <Entypo name="chevron-left" style={styles.backButton} />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            width: width,
                            height: 240,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom:20,
                        }}>
                        <Image
                            source={product.productImage}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'contain',
                            }}
                        />
                    </View>
                </View>
                <View style={{paddingHorizontal: 16, marginTop: 6}}>
                    <View style={{flexDirection: 'row', marginVertical: 4, alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={styles.productName}>{product.productName}</Text>
                        <Entypo name="edit" style={styles.linkIcon} />
                    </View>
                    <Text style={styles.productDescription}>{product.description}</Text>
                    <Text style={styles.productPrice}>R {product.productPrice}.00</Text>
                    <Text>Stock left: 32</Text>
                </View>
            </ScrollView>

            <View style={styles.addToCartButton}>
                <TouchableOpacity
                    onPress={() => (/*product.isAvailable ? addToCart(product.id) :*/ null)}
                    style={styles.addToCartButtonContainer}>
                    <Text style={styles.addToCartButtonText}>
                        {product.isAvailable ? 'Add to cart' : 'Not Available'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductInfo;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
    },
    infoContainer: {
        width: '100%',
        backgroundColor: COLOURS.backgroundLight,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingLeft: 16,
    },
    backButton: {
        fontSize: 18,
        color: COLOURS.backgroundDark,
        padding: 12,
        backgroundColor: COLOURS.white,
        borderRadius: 10,
    },
    productName: {
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 0.5,
        marginVertical: 4,
        color: COLOURS.black,
        maxWidth: '84%',
    },
    linkIcon: {
        fontSize: 24,
        color: COLOURS.blue,
        backgroundColor: COLOURS.blue + 10,
        padding: 8,
        borderRadius: 100,
    },
    productDescription: {
        fontSize: 12,
        color: COLOURS.black,
        fontWeight: '400',
        letterSpacing: 1,
        opacity: 0.5,
        lineHeight: 20,
        maxWidth: '85%',
        maxHeight: 44,
        marginBottom: 18,
    },
    productPrice: {
        fontSize: 18,
        fontWeight: '500',
        maxWidth: '85%',
        color: COLOURS.black,
        marginBottom: 4,
    },
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
});