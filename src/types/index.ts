import { sources } from "webpack";

export interface EverythingArticles{
     source:object ;
     author:string;
     title:string;
     description:string;
     url: string;
     urlToImage:string;
     publishedAt: Date;
     content:string;
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
    content:string;
    source: string;
    title: string;
    description: string;
    urlToImage:string;

}