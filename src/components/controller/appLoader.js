import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '9c981a17c97342a2b7b6ab85e4c870e3', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
