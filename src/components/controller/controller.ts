import AppLoader from './appLoader';
import { Sources, News, Endpoint } from '../../types/index';

class AppController extends AppLoader {
    public getSources(callback: (data: Sources) => void) {
        super.getResp<Sources>(
            {
                endpoint: Endpoint.sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: News) => void) {
        let target: HTMLElement;
        target = <HTMLElement>e.target;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<News>(
                        {
                            endpoint: Endpoint.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;