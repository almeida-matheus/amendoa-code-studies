import React from 'react'
import css from './style.module.scss'
import { Button } from 'components'

export default () => (
    <div className={css.Drawer}>
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-auto">
                    <Button
                        onClick={() => {
                            console.log('close contianer')
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
)
