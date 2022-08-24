import axios from 'axios'

export async function postPayoutsClient(datos) {
  const response = await axios({
    url: "https://apiuserdeploy.herokuapp.com/v1/payments/payouts",
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    data: datos
  })
  return response
}

export async function postSignupGoogleClient(datos) {
  const response = await axios({
    url: "https://apiuserdeploy.herokuapp.com/v1/signup/google",
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    data: datos
  })
  return response
}

export async function postSignupClient(datos) {
  const response = await axios({
    url: "https://apiuserdeploy.herokuapp.com/v1/signup",
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    data: datos
  })
  return response
}

export async function postSigninClient(datos) {
  const response = await axios({
    url: "https://apiuserdeploy.herokuapp.com/v1/signin",
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    data: datos
  })
  return response
}

export async function postForgetPassword(email) {
  const response = await axios({
    url: "https://apiuserdeploy.herokuapp.com/v1/forgetPassword",
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    data: email
  })
  return response
}

export async function postNewPassword(form) {
  const response = await axios({
    url: "https://apiuserdeploy.herokuapp.com/v1/newpassword",
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': form.token
    },
    data: form
  })
  return response
}