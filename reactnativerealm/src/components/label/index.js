import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components/native'

const Wrapper = styled.Text`
    font-family: 'Arial';
    font-size: ${props => props.fontSize}
        ${props =>
            props.primary &&
            css`
                color: ${props.theme.primary};
            `}
        ${props =>
            props.default &&
            css`
                color: ${props.theme.default};
            `};
    ${props =>
        props.bold &&
        css`
            font-weight: bold;
        `};
`

const Text = props => <Wrapper {...props}>{props.text}</Wrapper>

Text.defaultProps = {
    text: '',
    primary: false,
    default: false,
    bold: false,
    fontSize: 16,
}

Text.propTypes = {
    text: PropTypes.string,
    primary: PropTypes.bool,
    default: PropTypes.bool,
    bold: PropTypes.bool,
    fontSize: PropTypes.number,
}

export default withTheme(Text)
