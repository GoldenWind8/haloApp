import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {COLOURS, Items} from "../database/Database";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProductCard from "../cards/ProductCard";

function Home({navigation}) {
    const [products, setProducts] = useState([]);

    //get called on screen loads
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
        });

        return unsubscribe;
    }, [navigation]);

    //get data from DB
    const getDataFromDB = () => {
        let productList = [];
        for (let index = 0; index < Items.length; index++) {
            if (Items[index].category == 'product') {
                productList.push(Items[index]);
            }
        }

        setProducts(productList);
    };
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <MaterialIcons
                                name="inventory"
                                style={styles.shoppingIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
                            <MaterialCommunityIcons
                                name="cart"
                                style={styles.cartIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>
                                Products
                            </Text>
                            <Text style={styles.sectionCount}>
                                41
                            </Text>
                        </View>
                        <View style={styles.productList}>
                            {products.map(data => {
                                return <ProductCard data={data} key={data.id} />;
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>


    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    shoppingIcon: {
        fontSize: 18,
        color: COLOURS.red,
        padding: 12,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
    },
    cartIcon: {
        fontSize: 18,
        color: COLOURS.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOURS.backgroundLight,
    },
    bodyContainer: {
        padding:16,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sectionTitle: {
        fontSize: 18,
        color: COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1,
    },
    sectionCount: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: '400',
        opacity: 0.5,
        marginLeft: 10,
    },
    productList: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

});
export default Home;