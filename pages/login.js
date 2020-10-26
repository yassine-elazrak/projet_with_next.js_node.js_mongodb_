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
      email: '',
      password: '',
      message: null
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value.trim()
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value.trim()
    })
  }
  
  handleLogin(event) {
    event.preventDefault()

    this.setState({
      message: null
    })

    if (!this.state.email || !this.state.password) {
      this.setState({
        message: 'Email/Password is empty!'
      })

      return
    }

    let data = {
      email: this.state.email,
      password: this.state.password
    }

    fetch('auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      
      // alert(response.flashMessages.info);
      // alert(req.flash('info'))
      Router.push("/profile",{kk: lll})
    })
    .catch(error => {
      alert('Error:', error.message)
      this.setState({
        message: 'Request Failed!'
      })
    })
  }
  
  render() {
    
    const alert = (this.state.message === null) ? <div/> : <div className={`alert alert-danger`} role="alert">{this.state.message}</div>

   
      return (
      <>
          <Row className="mt-5">
            <Col xs="12" sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader>Login</CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                      <Label for="userEmail">Email</Label>
                      <Input type="email" name="email" id="userEmail" placeholder="example@domain.com" value={this.state.email} onChange={this.handleEmailChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="userPassword">Password</Label>
                      <Input type="password" name="password" id="userPassword" placeholder="" value={this.state.password} onChange={this.handlePasswordChange} />
                    </FormGroup>
                    <Button type="submit">Login</Button>
                  </Form>
                </CardBody>
              </Card>
              <br />
              {alert}
            </Col>
          </Row>
          <p className="text-center lead">
            If you don't have an account <Link href="/signup"><a>Sign Up</a></Link>
          </p>
          </>
      )
  }
}