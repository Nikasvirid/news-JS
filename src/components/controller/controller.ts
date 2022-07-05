import News from '../view/news/news';
import Sources from '../view/sources/sources';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback:(data:Sources)=>void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback:data<T>
        );
    }

    getNews(e:Event, callback:(data:News)=>void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
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