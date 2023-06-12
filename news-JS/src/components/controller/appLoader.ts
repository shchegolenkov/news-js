import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd8224f8ad97740c79204eab039943e98', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
