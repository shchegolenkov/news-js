import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: 'fcf880bf4e2d4a5fabb387bcc64296af', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
