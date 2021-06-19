import React, {useState, useEffect} from 'react';
import { Modal, ActivityIndicator} from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { getLinksSave, deletLink } from '../../utils/storeLinks'

import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem'
import StatusBarPage from '../../components/StatusBarPage'
import ModalLink from '../../components/ModalLink'
import { Container, Title, ListLinks, ContainerEmpty, WarningText } from './styles'

export default function MyLinks() {

    const isFocused = useIsFocused()

    const[links, setLinks] = useState([])
    const[data, setData] = useState({})
    const[modalVisible, setModalVisible] = useState(false)
    const[loading, setLoading] = useState(true)

    useEffect(() => {

        async function getLinks(){
            const result = await getLinksSave('sujeitolinks')
            setLinks(result)
            setLoading(false)
        }

        getLinks()

    }, [isFocused])


    function handleItem(item){
        setData(item)
        setModalVisible(true)
    }

    async function handleDelete(id){
        const result = await deletLink(links, id)
        setLinks(result)
    }

    return (
        <Container>
            <StatusBarPage 
                barStyle='ligth-content'
                backgroundColor='#132742' 
            />

            <Menu/>

            <Title>Meus Links</Title>

            { loading && (
                <ContainerEmpty>
                    <WarningText>Você ainda não possui nenhum link!</WarningText>
                </ContainerEmpty>
            )}

            {!loading && links.length === 0 && (
                <ContainerEmpty>
                    <ActivityIndicator color='#FFF' size={25} />
                </ContainerEmpty>
            )}

            <ListLinks 
                data={links}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <ListItem data={item} selectedItem={ handleItem } deleteItem={handleDelete} />}
                contentContainerStyle={{ paddinBottom: 20 }}
                showsVerticalScrollIndicator={false}
            />

            <Modal visible={modalVisible} transparent animationType='slide'>
                <ModalLink onClose={() => setModalVisible(false)} data={data} />
            </Modal>

        </Container>
    );
}