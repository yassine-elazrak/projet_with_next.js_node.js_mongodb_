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
      name: '',
      location: '',
      email: '',
      password: '',
      confirmPassword: '',
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

    if (!this.state.email || !this.state.password || !this.state.confirmPassword) {
      this.setState({
        message: 'All fields are required!'
      })

      return
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        message: 'Password did not match!'
      })

      return
    }

    let data = {
      name: this.state.name,
      email: this.state.email,
      location: this.state.location,
      password: this.state.password
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
      } else if (response.email) {
        alert(response.email);
        // Router.push('/login?email=yassine' )
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

    // if (this.props.session.loggedin) {
    //   return (
    //     <div {...this.props}>
    //       <p className="lead text-center mt-5 mb-5">
    //         <Link href="/"><a>Manage your profile</a></Link>
    //       </p>
    //     </div>
    //   )
    // } else {
      return (
        <div {...this.props}>
          <Row className="mt-5">
            <Col xs="12" sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader>Sign Up</CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleSignUp}>
                    <FormGroup>
                      <Label for="username">name</Label>
                      <Input type="text" name="name" id="username"  value={this.state.name} onChange={this.handle_Change} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="userEmail">Email</Label>
                      <Input type="email" name="email" id="userEmail" placeholder="example@domain.com" value={this.state.email} onChange={this.handle_Change} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="userlocation">location</Label>
                      <textarea type="text" name="location" id="userlocation" rows="2"  className="form-control" style={{width:'50%'}}  value={this.state.location} onChange={this.handle_Change} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="userPassword">Password</Label>
                      <Input type="password" name="password" id="userPassword" placeholder="" value={this.state.password} onChange={this.handle_Change} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="userConfirmPassword">Confirm Password</Label>
                      <Input type="password" name="confirmPassword" id="userConfirmPassword" placeholder="" value={this.state.confirmPassword} onChange={this.handle_Change} />
                    </FormGroup>
                    <Button type="submit">Sign Up</Button>
                  </Form>
                </CardBody>
              </Card>
              <br />
              {alert}
            </Col>
          </Row>
          <p className="text-center lead">
            <Link href="/login"><a>Back</a></Link>
          </p>
        </div>
      )
    
  }
}