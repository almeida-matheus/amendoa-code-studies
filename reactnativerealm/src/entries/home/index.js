import React from 'react'
import { Button, Card } from 'src/components'
import styled from 'styled-components'

const Wrapper = styled.SafeAreaView`
    flex: 1;
    padding: 16px;
`

const ActionsContainer = styled.View`
    padding: 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`
const ListContainer = styled.ScrollView`
    margin-bottom: 72px;
`

export default () => (
    <Wrapper>
        <ListContainer showsVerticalScrollIndicator={false}>
            {Array(20)
                .fill({})
                .map(() => (
                    <Card
                        model={{
                            name: 'teste',
                            city: 'teste city',
                        }}
                    />
                ))}
        </ListContainer>
        <ActionsContainer>
            <Button primary />
        </ActionsContainer>
    </Wrapper>
)
