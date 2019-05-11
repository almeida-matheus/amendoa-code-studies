import React, { Fragment } from 'react'
import { StatusBar } from 'react-native'
import { HomeEntry } from './src/entries'
import { ThemeProvider } from 'styled-components/native'

export default () => (
    <ThemeProvider
        theme={{
            primary: '#2699fb',
            primaryLight: '#f1f9ff',
            default: '#fff',
        }}
    >
        <Fragment>
            <StatusBar backgroundColor="#2699fb" barStyle="light-content" />
            <HomeEntry />
        </Fragment>
    </ThemeProvider>
)
