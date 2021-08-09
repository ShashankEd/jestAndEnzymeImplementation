import React, { useState, useEffect, useCallback } from 'react';
import {
    Text,View
} from 'react-native';
import { submitButton } from './ButtonComponent'
const CounterComponentHook = () => {
    const [count, incrementCount] = useState(0);
    //component did update
    useEffect(() => {
        console.log("this will be executed on every state update");
    }, [count])

    const onSubmit = (count) => {
        console.log("on submit called ", count);
        incrementCount(count)
    }
    const onSubmitCallback = useCallback((count) => onSubmit(count),[count]);
    
    return (
        <View data-test="component-counter">
            <Text data-test="component-countertext">Count is: {count}</Text>
            {/** The below will return into Too many renders issue, as submitButton
             * takes a function as argument, so use arrow function to bind it, such that it won't be called automaticlly 
             */}
              {/* {submitButton(onSubmitCallback(count+1), 'Counter-test')}  */}

              {submitButton(() => onSubmitCallback(count+1), 'Counter-test')} 
        </View>
    )

}
export default CounterComponentHook;