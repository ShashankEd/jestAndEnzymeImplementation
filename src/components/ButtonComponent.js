import {
    Text,
    TouchableOpacity
} from 'react-native';
import React from 'react';
export const submitButton = (onSubmit, title) => {
    return (
        <TouchableOpacity onPress={(value) => onSubmit(value)} data-test="component-counterButton">
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}