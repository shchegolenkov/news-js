export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

type ResponseStatus = 'ok' | 'error';

export interface NewsAPIResponse {
    status: ResponseStatus;
    sources?: Source[];
    code?: string;
    message?: string;
}

export type NewsAPICallback = (data?: NewsAPIResponse) => void;

type ArticleSource = {
    id: string | null;
    name: string;
};

export interface Article {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export interface NewsResponse {
    status: ResponseStatus;
    totalResults?: number;
    articles?: Article[];
    code?: string;
    message?: string;
}

export type NewsCallback = (data?: NewsResponse) => void;

export enum Endpoints {
    sources = 'sources',
    everything = 'everything',
}

export type StringObject = Record<string, string>;

export const isResponseCorrectData = (data: unknown): data is NewsAPIResponse | NewsResponse => {
    return typeof data === 'object' && data !== null && 'status' in data;
};
