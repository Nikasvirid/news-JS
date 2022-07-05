export type Callback<T> = (data: T) => void;
export interface Sources {
    id: string;
    name: string;
    status: string;
}
export interface Articles {
    author: string | null;
    content: string;
    description: string;
    publishedAt: string;
    source: Sources;
    title: string;
    url: string;
    urlToImage: string;
}
export interface News {
    status: string;
    totalResults?: number;
    sources?: [];
    articles?: Articles[];
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