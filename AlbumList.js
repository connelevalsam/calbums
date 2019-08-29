import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

import sty from './styles/design'
import Head from './Header'
import axios from 'axios';
import AlbumDetail from './AlbumDetail'
import ApIntro from './AppIntro'
import AppIntroSlider from 'react-native-app-intro-slider';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import LinearGradient from 'react-native-linear-gradient';

let IntroImages = require('./images/bgImg.jpg');
let IntroImages01 = require('./images/bgImg01.jpg');
let IntroImages02 = require('./images/bgImg02.jpg');
const slides = [
  {
    key: 'k1',
    title: 'CBums',
    text: 'Feel the Music',
    image: IntroImages,
    titleStyle: sty.title,
    textStyle: sty.text,
    imageStyle: sty.introImage,
    colors: ['rgba(0,255,167,1)', 'rgba(9,86,121,1)'],
    
  },
  {
    key: 'k2',
    title: 'CBums',
    text: 'Enjoy the music',
    image: IntroImages01,
    titleStyle: sty.title,
    textStyle: sty.text,
    imageStyle: sty.introImage,
    colors: ['rgba(0,255,167,1)', 'rgba(9,86,121,1)'],
  },
  {
    key: 'k3',
    title: 'CBums',
    text: 'Know about the best',
    image: IntroImages02,
    titleStyle: sty.title,
    textStyle: sty.text,
    imageStyle: sty.introImage,
    colors: ['rgba(0,255,167,1)', 'rgba(9,86,121,1)'],
  },
];

export default class AlbumList extends Component {
    state = { albums: [
      {title: 'Yung-Denzel', artist: 'M.I-Abaga', thumbnail_image: require('./images/MI-Abaga.jpg')},
      {title: 'Alternate-ending', artist: 'Boggy&Paybac', thumbnail_image: require('./images/Boggy.jpg')},
      ],
      online: false,
      show_Main_App: false,
    };
    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
            Response => this.setState({
                albums: Response.data,
                online: true
            })
        );
    }

    _renderItem = ({ item, dimensions }) => (
      
      <ImageBackground 
      source={item.image}
      style={{flex: 1, width: '100%', height: '100%'}}> 
        <View>
          <Text style={sty.introTitle}>{item.title}</Text>
          <Text style={sty.introText}>{item.text}</Text>
        </View>
      </ImageBackground>
    )

    on_Done_all_slides = () => {
      this.setState({ show_Main_App: true });
    };

    on_Skip_slides = () => {
        this.setState({ show_Main_App: true });
    };

    handleAlbums = () => {
      return this.state.albums.map(album => 
          <AlbumDetail key={album.title} anAlbum={album} internet={this.state.online} />
      );
    }

  render() {
    const showApp = this.state.show_Main_App;
      
    if ( showApp ) {
      return (
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <Head title={'Albums'} />
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={sty.scrollView}>
              <View style={sty.body}>
              <View style={{flex: 1}}>
              {this.handleAlbums()}
            </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </Fragment>
      );
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this.on_Done_all_slides}
          showSkipButton={true}
          onSkip={this.on_Skip_slides}
          renderItem={this._renderItem}
        />
      );
    }
  }
}
