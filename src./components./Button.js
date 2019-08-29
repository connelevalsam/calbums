import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from './styles/design';

Button = ({ onPress, text }) => {
    const { buttonContainer, button } = styles;
    return (
        <TouchableOpacity style={buttonContainer} onPress={onPress} >
            <Text style={button}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;
