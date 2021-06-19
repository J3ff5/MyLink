import React from 'react'
import { View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { Feather } from '@expo/vector-icons'
import { ContainerButton, Item, ActionContainer } from './styles'

export default function ListItem({ data, selectedItem, deleteItem }){

    function RigthActions(){
        return(
            <ActionContainer onPress={() => deleteItem(data.id)} >
                <Feather
                    name='trash'
                    color='#FFF'
                    size={24}
                />
            </ActionContainer>
        )
    }

    return(
        <View>
            <Swipeable renderRightActions={RigthActions} >
                <ContainerButton activeOpacity={0.9} onPress={() => selectedItem(data)} >
                    <Feather
                        name='link'
                        color='#FFF'
                        size={24}
                    />   
                    <Item numberOfLines={1} >{data.long_url}</Item>
                </ContainerButton>
            </Swipeable>
        </View>
    )
}