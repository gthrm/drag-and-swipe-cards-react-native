import React from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Language } from '../App';

const heart = require('../assets/images/icons8-heart-24.png');
const filledHeart = require('../assets/images/icons8-heart-24-filled.png');

interface ListItemProps {
    item: Language,
    move: () => void,
    moveEnd: () => void,
    isActive: boolean,
    onHeartPress: () => void,
}

const ListItem = ({ item, move, moveEnd, isActive, onHeartPress }: ListItemProps) => {
    return (
        <SwipeRow
            rightOpenValue={-180}>

            <View style={styles.hidden}>
                <TouchableOpacity onPress={onHeartPress}>
                    <Image source={item.favorite ? filledHeart : heart} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                activeOpacity={1}
                style={[styles.root, isActive && styles.active]}
                onLongPress={move}
                onPressOut={moveEnd}
            >
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        </SwipeRow>
    )
}

const styles = StyleSheet.create({
    root: {
        height: 80,
        backgroundColor: '#031d44',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: '#e57a44',
        fontSize: 32,
    },
    active: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    hidden: {
        height: 80,
        backgroundColor: '#d6eadf',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 80,
    }
});

export default ListItem