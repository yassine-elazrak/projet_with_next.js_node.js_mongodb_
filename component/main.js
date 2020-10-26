import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Table from 'react-bootstrap/Table'
import Img1 from '../public/1.jpg'
import img2 from '../public/2.jpg'
import img3 from '../public/3.jpg'
import img5 from '../public/5.jpg'

import Header from './header'
// import Footer from './footer'

const main = (props) => {


    var para = ` مغربية كبيرة، وعدم فتح الحدودالبلدين سيكبّد المغاربة العالقين فيها، أو الذين سيأتون خسائرالخزين، ثم أين سيجرو`;

    return (
        <>
            <main>
                <div className="but" style={{
                    backgroundImage: `url(${Img1})`, backgroundSize: 'cover',
                    overflow: 'hidden',
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <br />

                        <br />
                        <br />

                        <p>
                            <u> موقع توصيله  </u>
                        </p>
                        <p>
                            <u>موقع توصيله  حدد وجهتك. تم اطلب سيارة توصلك</u>
                        </p>
                        <p>
                            <u>  إنه مجانا</u>
                        </p>
                        <br />
                        <a href="./local"><button type="button" className="  btn-outline-primary btn-rounded waves-effect  btno bn dd" >
                            خسائر</button></a>
                    </div>
                </div>
                <div>
                    <Table  className="table table-borderless" style={{ width: '100%' }}>
                         < thead>
                            <tr>
                                 < td> </td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td style={{ width: '50%' }}><img src={img5} alt="1" id="5" style={{ width: '100%', }} /></td>
                                 < td style={{ width: '50%' }}>


                                    <p dir="rtl" lang="ar" style={{ fontSize: '29px' }}> {para}</p>

                                 </td>

                            </tr>
                            <tr>
                                 < td style={{ width: '50%' }}>


                                    <p dir="rtl" lang="ar" style={{ fontSize: '29px' }}> {para}</p>

                                 </td>
                                 < td style={{ width: '50%' }}><img src={img2} alt="1" id="1" style={{ width: '100%', }} /> </td>

                            </tr>
                            <tr>
                                 < td style={{ width: '50%' }}><img src={img3} alt="1" id="3" style={{ width: '100%', }} /> </td>
                                 < td style={{ width: '50%' }}>


                                    <p dir="rtl" lang="ar" style={{ fontSize: '29px' }}> {para}</p>

                                 </td>

                            </tr>
                        </tbody>
                    </Table>

                </div>
            </main>


            <style jsx>
                {`
                .img{
                    width: '100%';

                }
    
                .but {
                    width: 100%;
                    height: 300px;
                    margin-top: 22px;
                    margin-bottom: 20px;
                }
                u{
                    color: white;
                }
               
                .btno {
                    margin: .375rem;
                    color: white;
                    text-transform: uppercase;
                    word-wrap: break-word;
                    white-space: normal;
                    cursor: pointer;
                    border: 0;
                    border-radius: 25rem;
                    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
                    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
                    padding: .74rem 3rem;
                    font-size: .81rem;
                    text-align: center;
                }
                .bn:hover, .bn:focus, .bn:active, .bn:active:focus, .bn.active {
                    color: #6200ea !important;
                    background-color: transparent !important;
                    border-color: #6200ea !important;
                }
                .dd {
                    color: white !important;
                    background-color: #6200ea !important;;
                    border: 2px solid #fff !important;
                    color: white;
                }
                td{
                    padding-left: 5rem ;
                    padding-right: 5rem ;


                }
                td p{
                    padding:20px;
                    text-align: right;

                }
                    `}
            </style>

        </>
    );
}

export default main;
