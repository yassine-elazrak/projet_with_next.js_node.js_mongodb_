import React, { Component } from 'react'
import Img1 from '../public/4.jpg'

export class step0 extends Component {
    render() {
        return (
            <>
            <main>
            <div className="man" style={{
                    backgroundImage: `url(${Img1})`,
                }}>

                    <div>

                    <div className="circle">
                        <div className="cl"></div>
                    </div>
                    </div>

                </div>
            </main>
            <style jsx>
                {`
                .cl{
                    text-align:center;
                    height: 25px;
                    width: 25px;
                    background-color: #bbb;
                    border-radius: 50%;
                    
                }
                .circle{
                    float:right;
                    height: 55px;
                    width: 55px;
                    background-color: #fff;
                    border-radius: 50%;
                }
              
                .man {
                   
                    height: 99vh;
                    width:99vw;
                    background-repeat: no-repeat;
                    background-size: cover;
                    margin:0px;
                  }
                `}
            </style>
            </>
        )
    }
}

export default step0
