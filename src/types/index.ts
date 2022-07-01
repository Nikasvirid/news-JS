export interface EverythingArticles{
    source:{id: string | null; name: string} ;
    author:string;
    title:string;
    description:string;
    url: string;
    urlToImage:string;
    publishedAt: Date;
    
};

export interface Sources{
   id : string;
   name: string;
   description: string;
   category:string;
   language: string
   country: string;
   url: string;
};
export interface Headlines {
   author:string;
   publishedAt: Date;
   source: string;
   title: string;
   description: string;
   urlToImage:string;

}