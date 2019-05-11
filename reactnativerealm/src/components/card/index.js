import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components/native'
import { Label, Icon } from 'src/components'

const Wrapper = styled.View`
    background: ${props => props.theme.primaryLight};
    height: 72px;
    margin: 8px 0px;
    align-items: center;
    flex-direction: row;
    padding-left: 16px;
`

const UserContainer = styled.View`
    width: 48px;
    height: 48px;
    border-radius: 50;
    background: ${props => props.theme.primary};
    justify-content: center;
    align-items: center;
`

const InfoContainer = styled.View`
    margin-left: 16px;
`

const ActionsContainer = styled.View`
    position: absolute;
    right: 0;
    margin-right: 16px;
`

const Card = ({ model, theme }) => (
    <Wrapper>
        <UserContainer>
            <Icon width={24} height={24} color={theme.default} icon="user" />
        </UserContainer>
        <InfoContainer>
            <Label text={model.name} bold primary />
            <Label text={model.city} primary fontSize={14} />
        </InfoContainer>
        <ActionsContainer>
            <TouchableOpacity
                onPress={() => {
                    console.log('teste')
                }}
            >
                <Icon
                    width={14}
                    height={14}
                    color={theme.primary}
                    icon="close"
                />
            </TouchableOpacity>
        </ActionsContainer>
    </Wrapper>
)

Card.propTypes = {
    model: PropTypes.shape({
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
    }),
    theme: PropTypes.shape({}),
}

export default withTheme(Card)
