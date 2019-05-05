import React from 'react'
import PropTypes from 'prop-types'
import css from './style.module.scss'

const Button = ({ onClick }) => (
    <button onClick={onClick} className={css.Button} />
)

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Button
