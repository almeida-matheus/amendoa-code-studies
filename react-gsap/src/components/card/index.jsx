import React from 'react'
import PropTypes from 'prop-types'
import css from './style.module.scss'
import classNames from 'classnames/bind'

const style = classNames.bind(css)

const Card = ({ type }) => (
    <div className={style({ Card: true, [`--${type}`]: true })}>card</div>
)

Card.propTypes = {
    type: PropTypes.oneOf(['I', 'II', 'III', 'IV']),
}

export default Card
