import React from 'react'
import { Button } from 'src/components'
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
const ListContainer = styled.View`
    background-color: red;
`

export default () => (
    <Wrapper>
        <ListContainer />
        <ActionsContainer>
            <Button primary />
        </ActionsContainer>
    </Wrapper>
)
