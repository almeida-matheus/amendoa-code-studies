import React from 'react'
import { HomeEntry } from './src/entries'
import { ThemeProvider } from 'styled-components/native'

export default () => (
    <ThemeProvider
        theme={{
            primary: '#2699fb',
            default: '#fff',
        }}
    >
        <HomeEntry />
    </ThemeProvider>
)
