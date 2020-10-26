import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import Main from './index'


export class layout extends Component {
    render() {
        return (
            <>
           
            <Header/>
            <Main/>
            <Footer/>
            </>
        )
    }
}

export default layout
