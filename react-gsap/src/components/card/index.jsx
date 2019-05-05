import React from 'react'
import PropTypes from 'prop-types'
import css from './style.module.scss'
import classNames from 'classnames/bind'

const style = classNames.bind(css)

const Card = ({ type }) => (
    <div
        onClick={() => {
            console.log('card')
        }}
        className={style({ Card: true, [`--${type}`]: true })}
    />
)

Card.propTypes = {
    type: PropTypes.oneOf(['I', 'II', 'III', 'IV']),
}

export default Card