import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '56942e6cf42d46f39dd87ccd467347f9', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
