export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface NewsAPIResponse {
    status: string;
    sources: Source[];
}

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
    status: string;
    totalResults: number;
    articles: Article[];
}

export enum Endpoints {
    sources = 'sources',
    everything = 'everything',
}
