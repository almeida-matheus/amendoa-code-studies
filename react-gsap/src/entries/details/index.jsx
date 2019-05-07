import React, { useEffect, useRef } from 'react'
import { Card } from 'components'
import css from './style.module.scss'
import { withRouter } from 'react-router-dom'
import { TweenMax } from 'gsap'

export default withRouter(({ match }) => {
    const cardRef = useRef()

    useEffect(() => {
        TweenMax.to(cardRef.current, 0.7, {
            scaleY: 3,
            scaleX: 1.5,
        })
    }, [])

    return (
        <section className={css.Details}>
            <div
                className="container"
                style={{
                    height: '100%',
                }}
            >
                <div
                    className="row justify-content-center align-items-center"
                    style={{
                        height: '100%',
                    }}
                >
                    <div className="col-12 col-sm-6 col-md-4" ref={cardRef}>
                        <Card type={match.params.color} onClick={() => {}} />
                    </div>
                </div>
            </div>
        </section>
    )
})
