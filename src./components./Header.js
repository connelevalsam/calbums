import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles/design'

export default Header = (props) => {
    const { header, headerText } = styles;
    return (
        <View style={header}>
            <Text style={headerText}> {props.title} </Text>
        </View>
    )
}
