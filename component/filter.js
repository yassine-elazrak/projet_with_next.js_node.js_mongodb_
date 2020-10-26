import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';


export default class extends React.Component {
  
  static async getInitialProps({req, res}) {

    let props = {
      session: ''
    }
    
   
    
    return props
  }

  constructor(props) {
    super(props)
    this.state = {
      arrive: '',
      location: '',
      depart: '',
      Date: '',
      Time: '',
      message: null
    }
    this.handle_Change = this.handle_Change.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handle_Change(event) {
    const target = event.target;
      const name = target.name;
    this.setState({
       [name]: event.target.value.trim()
    })
  }

  handleSignUp(event) {
    event.preventDefault()

    this.setState({
      message: null
    })

    if (!this.state.depart || !this.state.Date || !this.state.Time) {
      this.setState({
        message: 'All fields are required!'
      })

      return
    }

    if (this.state.Date !== this.state.Time) {
      this.setState({
        message: 'Date did not match!'
      })

      return
    }

    let data = {
      name: this.state.name,
      depart: this.state.depart,
      location: this.state.location,
      Date: this.state.Date
    }
    alert('data',data);
    fetch('auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {

      
      if (response.message) {
        this.setState({
          message: response.message
        })
        alert(message);
      } else if (response.depart) {
        alert(response.depart);
        // Router.push('/login?depart=yassine' )
        // response.r

      } else {
        this.setState({
          message: 'Unknown Error!'
        })
        console.log("bbb",  response)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      this.setState({
        message: 'Request Failed!'
      })
    })
  }
  
  render() {
    
    const alert = (this.state.message === null) ? <div/> : <div className={`alert alert-danger`} role="alert">{this.state.message}</div>

      return (
        <div {...this.props}>
                  <Form onSubmit={this.handleSignUp}>
                    {/* <FormGroup>
                      <Label for="username">name</Label>
                      <Input type="text" name="name" id="username"  value={this.state.name} onChange={this.handle_Change} />
                    </FormGroup> */}
                    <FormGroup>
                      <Label for="userdepart">depart</Label>
                      <Input type="depart" name="depart" id="userdepart"  value={this.state.depart} onChange={this.handle_Change} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="userarrive">arrive</Label>
                      <Input type="arrive" name="arrive" id="userarrive"  value={this.state.arrive} onChange={this.handle_Change} />
                    </FormGroup>
                    {/* <FormGroup>
                      <Label for="userlocation">location</Label>
                      <textarea type="text" name="location" id="userlocation" rows="2"  className="form-control" style={{width:'50%'}}  value={this.state.location} onChange={this.handle_Change} />
                    </FormGroup> */}
                    <FormGroup>
                      <Label for="userDate">Date</Label>
                      <Input type="Date" name="Date" id="userDate" placeholder="" value={this.state.Date} onChange={this.handle_Change} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="userTime">Confirm Date</Label>
                      
                          {/* <input className="form-control" type="time" value="13:45:00" id="example-time-input" /> */}
                      <Input type="time" name="Time" id="userTime" placeholder="" value={this.state.Time} onChange={this.handle_Change} />
                    </FormGroup>
                    <Button type="submit">Sign Up</Button>
                  </Form>
        </div>
      )
    
  }
}







// import React, { Component } from 'react'

// export class filter extends Component {
//     render() {
//         return (
//             <>
//                 <div>




//                     <div className="form-group row">
//                         <label for="example-text-input" className="col-2 col-form-label">Text</label>
//                         <div className="col-10">
//                             <input className="form-control" type="text" value="Artisanal kale" id="example-text-input" />
//                         </div>
//                     </div>

//                     <div className="form-group row">
//                         <label for="example-search-input" className="col-2 col-form-label">Search</label>
//                         <div className="col-10">
//                             <input className="form-control" type="search" value="How do I shoot web" id="example-search-input" />
//                         </div>
//                     </div>

//                     <div className="form-group row">
//                         <label for="example-date-input" className="col-2 col-form-label">Date</label>
//                         <div className="col-10">
//                             <input className="form-control" type="date" value="2011-08-19" id="example-date-input" />
//                         </div>
//                     </div>

//                     <div className="form-group row">
//                         <label for="example-time-input" className="col-2 col-form-label">Time</label>
//                         <div className="col-10">
//                             <input className="form-control" type="time" value="13:45:00" id="example-time-input" />
//                         </div>
//                     </div>



//                 </div>

//                 <style jsx>{`

//             `}</style>
//             </>
//         )
//     }
// }

// export default filter
