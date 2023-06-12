import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesEl: Element | null = document.querySelector('.sources');
        if (sourcesEl)
            sourcesEl.addEventListener('click', (e) =>
                this.controller.getNews(e, (data) => {
                    if (data !== undefined) this.view.drawNews(data);
                })
            );
        this.controller.getSources((data) => {
            if (data !== undefined) this.view.drawSources(data);
        });
    }
}

export default App;
