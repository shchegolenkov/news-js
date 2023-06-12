import AppLoader from './appLoader';
import { NewsAPIResponse, NewsResponse, Endpoints } from '../../types/index';

class AppController extends AppLoader {
    public getSources(callback: ((data?: NewsAPIResponse) => void) | undefined): void {
        super.getResp(
            {
                endpoint: Endpoints.sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: ((data?: NewsResponse) => void) | undefined): void {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;

        while (target !== newsContainer && target instanceof HTMLElement && newsContainer instanceof HTMLElement) {
            if (target.classList.contains('source__item')) {
                newsContainer.querySelector('.source__item--active')?.classList.remove('source__item--active');
                target.classList.add('source__item--active');
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId !== null) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoints.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
