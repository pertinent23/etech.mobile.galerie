import React from "react";
import { View, StyleSheet, Text, FlatList, Image, Pressable } from "react-native";

const img1 = require( '../assets/img/robot1.png' );
const img2 = require( '../assets/img/robot2.png' );
const img3 = require( '../assets/img/robot3.png' );
const img4 = require( '../assets/img/robot4.png' );
const img5 = require( '../assets/img/robot5.png' );
const img6 = require( '../assets/img/robot6.png' );

class GalerieItem extends React.Component{
    render() {
        return (
            <Pressable 
                style={ styles.galerieItem }
                onPress={ this.props.onPress }
            >
                <View style={ styles.galerieItemData }>
                    <View style={ styles.imageContainer }>
                        <Image 
                            style={ styles.galerieItemImage }
                            source={ this.props.img }
                        />
                    </View>
                    <View style={ styles.contentTitle }>
                        <Text style={ styles.galerieItemTitle }> { this.props.title } </Text>
                    </View>
                </View>
            </Pressable>
        );
    }
}

export class Galerie extends React.Component{
    _press() {
        this.props.navigation.push( 'Other' );
    }

    _getData() {
        return [
            { path: img1, title: 'First Rebot'}, 
            { path: img2, title: 'Second Rebot'}, 
            { path: img3, title: 'Yellow Rebot'}, 
            { path: img4, title: 'Red Rebot'}, 
            { path: img5, title: 'Bottom Rebot'}, 
            { path: img6, title: 'Saphir Rebot'}
        ];
    }

    _renderItem( { item } ) {
        return (
            <GalerieItem 
                img={ item.path }
                title={ item.title }
                onPress={ this._press.bind( this ) }
            />
        )
    }

    render() {
        return (
            <View style={ styles.container }>
                <FlatList 
                    style={ styles.list }
                    renderItem={ this._renderItem.bind( this ) }
                    data={ this._getData() }
                    keyExtractor={ ( _, n ) => n }
                    numColumns={ 2 }
                />
            </View>
        )
    }
}

export const styles = StyleSheet.create( {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },
    button: {
        marginTop: 50
    },
    list: {
        width: '100%'
    },
    galerieItem: {
        width: '50%',
        height: 280,
        padding: 5
    },
    galerieItemData: {
        width: '100%',
        flex: 1,
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageContainer: {
        height: 150,
        width: 150,
        borderRadius: 100,
        marginTop: 30
    },
    contentTitle: {
        marginTop: 50
    },
    galerieItemImage: {
        height: '100%',
        width: '100%'
    },
    galerieItemTitle: {
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontWeight: '600'
    }
} );