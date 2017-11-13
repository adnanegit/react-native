import React, {Component} from 'react';
import {Text, View, Image, ScrollView, Linking} from 'react-native';
import Card from './Card';
import CardDetail from './CardDetail';
import Button from './Button';

const AlbumDetail = ({currentAlbum}) => {
    const {title, artist, thumbnail_image, image, url} = currentAlbum;
    const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle,imageStyle} = styles;

    return (
        <Card>            
            <CardDetail>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} 
                           source={{uri:thumbnail_image}} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardDetail>
            <CardDetail>
                <Image   style={imageStyle}
                         source={{uri:image}}/>
            </CardDetail>
            <CardDetail>
                <Button onPress={()=> Linking.openURL(url)}>
                    Buy Me!
                </Button>
            </CardDetail>            
        </Card>
    );
};

const styles = {
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle:{
        height:300,
        flex: 1,
        width: null
    }

};

export default AlbumDetail;
