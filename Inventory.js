import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'

export const data = [
    {
        id: 3,
        image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        name: 'Chicken',
        price: '20'
    },
    {
        id: 2,
        image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        name: 'John DoeLink',
        price: '2003'
    },
    {
        id: 4,
        image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
        name: 'Finn DoRemiFaso',
        price: '23'
    },
    {
        id: 5,
        image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        name: 'Maria More More',
        price: '54'
    },
    {
        id: 1,
        image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        name: 'Frank Odalthh',
        price: '34'
    }
]

export default function Inventory(){
    //TODO get from fiorebase
    const [inventory, setInventory] = useState(data)

    return (
        <FlatList
            style={styles.root}
            data={inventory}
            ItemSeparatorComponent={() => {
                return <View style={styles.separator} />
            }}
            keyExtractor={item => {
                return item.id
            }}
            renderItem={item => {
                const Notification = item.item

                let mainContentStyle
                return (
                    <TouchableOpacity style={styles.container}>
                        <Image source={{ uri: Notification.image }} style={styles.avatar} />
                        <View style={styles.content}>
                            <View style={styles.text}>
                                <Text style={styles.name}>{Notification.name}</Text>
                                <View style={styles.amount}><Text>{Notification.text}</Text></View>
                            </View>
                            <Text style={styles.timeAgo}>Click to edit</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#FFFFFF',
    },
    container: {
        padding: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        alignItems: 'flex-start',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    text: {
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    content: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0,
    },
    mainContent: {
        marginRight: 60,
    },
    img: {
        height: 50,
        width: 50,
        margin: 0,
    },
    attachment: {
        position: 'absolute',
        right: 0,
        height: 50,
        width: 50,
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    timeAgo: {
        fontSize: 12,
        color: '#696969',
    },
    name: {
        fontSize: 16,
        color: '#1E90FF',
    },
    amount:
        {
            alignItems: "flex-end",
            flex:1,

        }
})
