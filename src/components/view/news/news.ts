import './news.css';

class News {
    draw(data) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            
            const newsClone = (document.getElementById("newsItemTemp")as HTMLElement).content.cloneNode(true) ;
            
            
                
            
           

                 if (idx % 2){
                    newsClone.querySelector(selectors,'.news__item') .classList.add('alt');

                 newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
                 item.urlToImage || 'img/news_placeholder.jpg'
                 })`;
              
                }   
            (newsClone.querySelector('.news__meta-author')as HTMLElement).textContent = item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date')as HTMLElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title').textContent = item.title;
            newsClone.querySelector('.news__description-source').textContent = item.source.name;
            newsClone.querySelector('.news__description-content').textContent = item.description;
            newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        })

        document.querySelector('.news')!.innerHTML = '';
        document.querySelector('.news')!.appendChild(fragment);
    }
}

export default News;
 

