import News from './news/news';
import Sources from './sources/sources';
import { NewsAPIResponse, NewsResponse } from 'types/index';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsResponse): void {
        const values: NewsResponse['articles'] = data?.articles ?? [];
        if (values.length) this.news.draw(values);
    }

    public drawSources(data: NewsAPIResponse): void {
        const values: NewsAPIResponse['sources'] = data?.sources ? data?.sources : [];
        if (values.length) this.sources.draw(values);
    }
}
