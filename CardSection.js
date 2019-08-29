import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles/design'

const CardSection = (props) => {
    return (
        <View style={styles.content}>
            { props.children }
        </View>
    )
}

export default CardSection
