import React, { useState } from 'react'
import { Card, Button, Drawer } from 'components'
import css from './style.module.scss'

export default () => {
    const [drawerIsOpened, setDrawerIsOpened] = useState(false)
    const toggleIsOpened = () => setDrawerIsOpened(!drawerIsOpened)

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
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="I" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="II" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="III" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="IV" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="III" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="IV" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="II" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="IV" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="III" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="I" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="II" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card type="IV" />
                    </div>
                </div>
            </div>
        </section>
    )
}
