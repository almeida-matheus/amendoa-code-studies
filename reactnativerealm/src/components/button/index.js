import React, { useState } from 'react'
import { View, Text } from 'react-native'

export default () => {
    const [teste, setTeste] = useState('button')

    return (
        <View>
            <Text>{teste}</Text>
        </View>
    )
}
