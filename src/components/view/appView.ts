import News from './news/news';
import Sources from './sources/sources';
import { News1, Sources1 } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: News1) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: News1) {
        const values: [] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;