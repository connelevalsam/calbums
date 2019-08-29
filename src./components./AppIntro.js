import React from 'react'
import { View, ImageBackground } from 'react-native'
import Button from './Button';
import LinearGradient from 'react-native-linear-gradient';

const AppIntro = ({ img, pressed }) => {
    return (
            // <ImageBackground
            //     source={img}
            //     style={{flex: 1, width: '100%', height: '100%'}}
            // >
            //     <View style={{justifyContent: 'flex-end'}}>
            //         <Button onPress={pressed} text='Done' />
            //     </View>
            // </ImageBackground>
            <View style={{flex: 1}}>
                <LinearGradient 
                style={{flex: 1, 
                justifyContent: 'center'}} 
                colors={['rgba(9,86,121,1)', 'rgba(0,255,167,1)']} 
                start={{ x: 0.1, y: 1.0 }} 
                end={{ x: 1, y: 0 }}>
                    <View style={{alignItems: 'center'}}>
                        <Button onPress={pressed} text='Done' />
                    </View>
                </LinearGradient>
            </View>
    )
}

export default AppIntro
