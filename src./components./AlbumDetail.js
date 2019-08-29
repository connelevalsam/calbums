import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import styles from './styles/design';

const AlbumDetail = ({ anAlbum, internet }) => {
    const { thumbnail_image, title, artist, image, url } = anAlbum;
    const { thumbnailStyle, contentHeader, thumbnailConatainer, imageStyle, imageContainer } = styles;
    // const { online } = internet;
    renderImage = () => {
        if (internet.online) {
            return <Image style={thumbnailStyle} source={ thumbnail_image } />
        } else {
            return <Image style={thumbnailStyle} source={{ uri: ''+thumbnail_image }} />
        }
    }
    onPress = () => {
        
    }
    return(
        <Card>
            <CardSection>
                <View style={thumbnailConatainer}>
                    {this.renderImage()}
                </View>
                <View style={contentHeader}>
                    <Text style={{ fontSize:18 }}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: ''+image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(''+url)} text='Buy Now' />
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;
