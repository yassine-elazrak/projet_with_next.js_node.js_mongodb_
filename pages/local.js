import React, { Component } from 'react'
import logo from '../public/logo.jpg'
import Footer from '../component/footer'
import Img1 from '../public/1.jpg'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'


export class local extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark  " style={{ 'backgroundColor': '#355c7d ' }}>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm4.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                    <path fillRule="evenodd" d="M13 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">

                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8.146 11.354a.5.5 0 0 1 0-.708L10.793 8 8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z" />
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 1 8z" />
                    <path fillRule="evenodd" d="M13.5 14.5A1.5 1.5 0 0 0 15 13V3a1.5 1.5 0 0 0-1.5-1.5h-8A1.5 1.5 0 0 0 4 3v1.5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-8A.5.5 0 0 1 5 13v-1.5a.5.5 0 0 0-1 0V13a1.5 1.5 0 0 0 1.5 1.5h8z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-question-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                  </svg>
                </a>
              </li>
            </ul>
            <img src={logo} alt='logo' style={{ overflow: 'hidden', width: '17rem', height: '3rem' }} title='logo' />
          </div>
        </nav>
        <main>
          <div className="but" style={{
            backgroundImage: `url(${Img1})`, backgroundSize: 'cover',
            overflow: 'hidden',
          }}>
            <Table className="table table-borderless" style={{ width: '100%' }}>
              < thead>
                <tr>
                  < td> </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input />
                  </td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>
                  <button className=" btn btn-primary ee ">ok</button>

                  </td>
                  <td> 
                    <p >fckldlfd</p>
                    <button className=" btn btn-primary gps">GPS</button>
                  </td>
                </tr>

              </tbody>
            </Table>

          </div>

        </main>
        <Footer />
        <style jsx>
          {`
                .img{
                    width: '100%';

                }
                e {
                  padding: 8px 44px;
                  /* border-radius: 1rem; */
                  /* float: left; */
                  margin-left: 34%;
                }
                .gps {
                  float: left;
                  /* width: 25%; */
                  margin-left: 25%;
                  padding: 0.2rem 0.9rem !important;
                  
                  background-color: #6a1b9a;
                }
              
                td p{
                  float: right;
                  /* width: 25%; */
                  margin-right: 25%;
                  padding: 0.2rem 0.9rem !important;
                  color: #fff;

                }
    
                .but {
                    width: 100%;
                    height: 300px;
                    margin-top: 22px;
                    margin-bottom: 20px;
                }
                .b {
                  
                  margin-top: 50px;
                  margin-bottom: 50px;
              }
              input{
                width:50%;
              }

              tr {
                width:100%;

              }
              td{
                text-align: center;
                width:50%

              }
               
              
                    `}
        </style>
      </>
    )
  }
}

export default local

