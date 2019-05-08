import React from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback } from 'react-native'
import styled, { withTheme, css } from 'styled-components/native'
import { Label } from 'src/components'

const ButtonWrapper = styled.View`
    align-items: center;
    justify-content: center;
    height: 56px;
    border-radius: 2px;
    ${props =>
        props.primary &&
        css`
            background-color: ${props.theme.primary};
        `}
`
const Button = props => (
    <TouchableWithoutFeedback
        onPressIn={() => {
            console.log('onPressIn')
        }}
        onPressOut={() => {
            console.log('onPressOut')
        }}
        onPress={() => {
            console.log('onPress')
        }}
    >
        <ButtonWrapper {...props}>
            <Label text="Add Random" bold default />
        </ButtonWrapper>
    </TouchableWithoutFeedback>
)

Button.defaultProps = {
    primary: false,
}

Button.propTypes = {
    primary: PropTypes.bool,
}

export default withTheme(Button)
