export type Callback<T> = (data: T) => void;
export interface Sources1 {
    id: string;
    name: string;
    status: string;
}
export interface Article {
    author: string | null;
    content: string;
    description: string;
    publishedAt: string;
    sources: Sources1;
    title: string;
    url: string;
    urlToImage: string;
}
export interface News1 {
    status: string;
    totalResults?: number;
    sources?: [];
    articles?: Article[];
}

export interface Portal {
    id: string;
    category: string;
    country: string;
    description: string;
    language: string;
    name: string;
    url: string;
}

export interface View {
    news: object;
    sources: object;
}

export enum Endpoint {
    everything = 'everything',
    sources = 'sources',
}