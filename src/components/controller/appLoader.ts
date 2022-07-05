import Loader from './loader'

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/',{
            apiKey: '9c981a17c97342a2b7b6ab85e4c870e3', //  https://newsapi.org/
        })
    }
}
fetch('https://nodenews.herokuapp.com/')

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
