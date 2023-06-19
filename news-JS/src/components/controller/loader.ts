import { NewsAPIResponse, NewsResponse, Endpoints, StringObject, isResponseCorrectData } from 'types/index';

class Loader {
    private readonly baseLink: string;
    private readonly options: StringObject;

    constructor(baseLink: string, options: StringObject) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: { endpoint: Endpoints; options?: StringObject },
        callback?: () => void
    ): void {
        if (!callback) {
            console.error('No callback for GET response');
            return;
        }
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: StringObject, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(
        method: string,
        endpoint: string,
        callback: (data: NewsAPIResponse | NewsResponse) => void,
        options = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: unknown) => {
                if (isResponseCorrectData(data)) {
                    callback(data);
                } else {
                    console.error('Unexpected data format');
                }
            })
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
