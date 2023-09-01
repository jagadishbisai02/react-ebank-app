import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #152850;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  height: 100vh;
`

export const LoginCardContainer = styled.div`
  background-color: #e0eefe;
  display: flex;
  border-radius: 15px;
`

export const LoginCardImage = styled.img`
  width: 480px;
  height: 80vh;
  margin-right: 10px;
`

export const LoginCard = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 0px 55px;
  border-radius: 15px;
  justify-content: center;
`

export const LoginHeading = styled.h1`
  font-size: 35px;
  font-weight: 700;
  font-family: 'Roboto';
  color: #152850;
`

export const LoginLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #183b56;
  margin-bottom: 9px;
`

export const LoginInput = styled.input`
  height: 36px;
  border-radius: 5px;
  margin-bottom: 30px;
  border: 1px solid #c3cad9;
  box-shadow: 1px 1px 3px 3px #5a7184;
  background: none;
  outline: none;
  padding: 0px 8px;
`

export const LoginBtn = styled.button`
  background-color: #1565d8;
  height: 36px;
  border: none;
  padding: 5px;
  border-radius: 6px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 8px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
  font-family: 'Roboto';
  text-align: center;
`
