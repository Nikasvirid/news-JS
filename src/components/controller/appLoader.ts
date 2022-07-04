import Loader from './loader'

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/',{
            apiKey: '9c981a17c97342a2b7b6ab85e4c870e3', //  https://newsapi.org/
        })
    }
}
const button= document.querySelector(".sources buttons");

fetch("https://newsapi.org/v2/everything?q=putin&apiKey=9c981a17c97342a2b7b6ab85e4c870e3")

  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log('data', data)
  })
  .catch(function (error) {
    console.log('error', error)
  })
  
  
export default AppLoader;
