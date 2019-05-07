import React from 'react'
import PropTypes from 'prop-types'
import css from './style.module.scss'
import classNames from 'classnames/bind'

const style = classNames.bind(css)

const Card = ({ type, onClick, children }) => (
    <div
        onClick={onClick}
        className={style({
            Card: true,
            [`--${type}`]: true,
        })}
    >
        {children}
    </div>
)

Card.defaultProps = {
    children: null,
}

Card.propTypes = {
    type: PropTypes.oneOf(['I', 'II', 'III', 'IV']),
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
}

export default Card
