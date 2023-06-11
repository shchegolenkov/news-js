import './news.css';
import { Article } from '../../../types/index';

class News {
    public draw(data: Article[]): void {
        const news: Article[] = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        if (newsItemTemp instanceof HTMLTemplateElement) {
            news.forEach((item: Article, idx: number) => {
                const newsClone: Node = newsItemTemp.content.cloneNode(true);
                if (!(newsClone instanceof DocumentFragment)) {
                    throw new Error();
                }
                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');
                const newsMetaPhoto: Element | null = newsClone.querySelector('.news__meta-photo');
                if (newsMetaPhoto !== null)
                    newsMetaPhoto.setAttribute(
                        'style',
                        `background-image: url(${item.urlToImage || 'img/news_placeholder.jpg'});`
                    );
                const newsMetaAuthor: Element | null = newsClone.querySelector('.news__meta-author');
                if (newsMetaAuthor !== null) newsMetaAuthor.textContent = item.author || item.source.name;
                const newsMetaDate: Element | null = newsClone.querySelector('.news__meta-date');
                if (newsMetaDate !== null)
                    newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                const newsDesctiptionTitle: Element | null = newsClone.querySelector('.news__description-title');
                if (newsDesctiptionTitle !== null) newsDesctiptionTitle.textContent = item.title;
                const newsDesctiptionSource: Element | null = newsClone.querySelector('.news__description-source');
                if (newsDesctiptionSource !== null) newsDesctiptionSource.textContent = item.source.name;
                const newsDesctiptionContent: Element | null = newsClone.querySelector('.news__description-content');
                if (newsDesctiptionContent !== null) newsDesctiptionContent.textContent = item.description;
                newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);
                fragment.append(newsClone);
            });
        }
        const newsContainer: Element | null = document.querySelector('.news');
        if (newsContainer !== null) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
