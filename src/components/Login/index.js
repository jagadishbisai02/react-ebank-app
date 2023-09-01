import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginCardContainer,
  LoginCardImage,
  LoginCard,
  LoginHeading,
  LoginLabel,
  LoginInput,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    userId: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  getUsername = event => this.setState({userId: event.target.value})

  getPassword = event => this.setState({password: event.target.value})

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 2, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {userId, password} = this.state
    const userDetails = {userId, password}
    const Url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(Url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userId, password, showSubmitError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <LoginCardContainer onSubmit={this.onSubmitLogin}>
          <LoginCardImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website logo"
          />
          <LoginCard>
            <LoginHeading>Welcome Back!</LoginHeading>
            <LoginLabel htmlFor="userId">User ID</LoginLabel>
            <LoginInput
              id="userId"
              type="text"
              value={userId}
              onChange={this.getUsername}
            />
            <LoginLabel htmlFor="userPassword">Password</LoginLabel>
            <LoginInput
              id="userPassword"
              type="password"
              value={password}
              onChange={this.getPassword}
            />

            <LoginBtn type="submit">Login</LoginBtn>
            {showSubmitError && <ErrorMsg>**{errorMsg}</ErrorMsg>}
          </LoginCard>
        </LoginCardContainer>
      </LoginContainer>
    )
  }
}

export default LoginRoute
