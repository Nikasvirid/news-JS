import Loader from './loader';
class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '9c981a17c97342a2b7b6ab85e4c870e3', //  https://newsapi.org/
        });
    }
}

export default AppLoader;
