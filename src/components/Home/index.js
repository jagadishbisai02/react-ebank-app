import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  BankHome,
  NavBar,
  EbankLogo,
  LogoutBtn,
  CardContainer,
  CardContent,
  DigitalCard,
} from './styledComponents'

const HomeRoute = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <BankHome>
      <NavBar>
        <EbankLogo
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />

        <LogoutBtn type="button" onClick={onClickLogout}>
          Logout
        </LogoutBtn>
      </NavBar>

      <CardContainer>
        <CardContent>Your Flexibility, Our Excellence</CardContent>
        <DigitalCard
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </CardContainer>
    </BankHome>
  )
}

export default withRouter(HomeRoute)
