import { View, Button } from 'react-native'
import React, { useState } from 'react'

export default function Toggle({ start, reset }) {
    const [isOn, setIsOn] = useState(false);

    const handleButtonClick = () => {
        setIsOn(prevIsOn => {
            if (prevIsOn) {
                reset(); // Call the reset function when the button is pressed
            } else {
                start(); // Call the start function when the button is pressed
            }
            return !prevIsOn;
        });
    };

    return (
        <View>
            <Button title={isOn ? 'Stop' : 'Start'} onPress={handleButtonClick} />
        </View>
    )
}