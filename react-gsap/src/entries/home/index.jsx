import React, { useState, useEffect, useRef } from 'react'
import { Card, Button, Drawer } from 'components'
import css from './style.module.scss'
import { TweenMax, TimelineMax } from 'gsap'
import { withRouter } from 'react-router-dom'

const items = ['I', 'II', 'III', 'IV', 'III', 'IV', 'II', 'IV', 'III']

export default withRouter(({ history }) => {
    const [drawerIsOpened, setDrawerIsOpened] = useState(false)
    const toggleIsOpened = () => setDrawerIsOpened(!drawerIsOpened)
    const cardsContainerRef = useRef()

    useEffect(() => {
        TweenMax.staggerFrom(
            cardsContainerRef.current.children,
            1,
            {
                opacity: 0,
                y: -20,
            },
            0.05
        )
    }, [])

    const cardAnimation = (item, index) => {
        const myTimeLine = new TimelineMax({ paused: true })
        const currentCard = cardsContainerRef.current.children[index]
        const cards = [].slice.call(cardsContainerRef.current.children)
        const { top, left, width, height } = currentCard.getBoundingClientRect()

        cards.splice(index, 1)

        TweenMax.staggerTo(cards, 0.5, {
            autoAlpha: 0,
        })

        TweenMax.to(currentCard, 0.7, {
            x: window.innerWidth / 2 - left - width / 2,
            y: window.innerHeight / 2 - top - height / 2,
            onComplete: () => {
                history.push(`/details/${item}`)
            },
        })

        myTimeLine.play()
    }

    const handleClickCard = (item, index) => {
        cardAnimation(item, index)
    }

    return (
        <section className={css.Home}>
            <div className="container">
                <Drawer
                    isOpened={drawerIsOpened}
                    toggleIsOpened={toggleIsOpened}
                />
                <div
                    className={
                        css['Home__actions-container'] +
                        ' row justify-content-end'
                    }
                >
                    <div className="col-auto">
                        <Button onClick={toggleIsOpened} />
                    </div>
                </div>
                <div className="row" ref={cardsContainerRef}>
                    {items.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4" key={index}>
                            <Card
                                type={item}
                                onClick={() => handleClickCard(item, index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})
