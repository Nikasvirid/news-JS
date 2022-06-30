import App from './components/app/app';
import './global.css';

const app = new App();
app.start();



 


  const options = {
    method: 'GET',
    mode: 'cors'
};
fetch(`http://localhost:8080/`, options)
.then((response) => {
console.log('response', response);
return response.json();
})
.then((data) => {
console.log('data', data);
})
.catch(() => { console.log('error') }); 