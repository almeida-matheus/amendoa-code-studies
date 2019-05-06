import React, { useMemo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import css from './style.module.scss'
import { Button } from 'components'
import { TimelineMax, Circ } from 'gsap'

const Drawer = ({ isOpened, toggleIsOpened }) => {
    const timelineMax = useRef()
    const drawerRef = useRef()

    useEffect(() => {
        if (!timelineMax.current) {
            timelineMax.current = new TimelineMax({ paused: true })
            timelineMax.current.set(drawerRef.current, {
                x: '100%',
            })

            timelineMax.current.to(drawerRef.current, 0.7, {
                x: '0%',
                ease: Circ.easeInOut,
            })
        }
    }, [])

    useMemo(() => {
        if (timelineMax.current) {
            if (isOpened) {
                timelineMax.current.restart()
            } else {
                timelineMax.current.reverse()
            }
        }
    }, [isOpened])

    return (
        <div id="testeeeeee" ref={drawerRef} className={css.Drawer}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-auto">
                        <Button onClick={toggleIsOpened} />
                    </div>
                </div>
            </div>
        </div>
    )
}

Drawer.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    toggleIsOpened: PropTypes.func.isRequired,
}

export default Drawer
