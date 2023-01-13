import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://v1.basketball.api-sports.io/',
  headers: {
    'x-apisports-key':'35436d1305f44744b7452c4c70e3736f',
    'x-rapidapi-host': 'v1.basketball.api-sports.io'
    },
})