import './sources.css';
import { Source } from 'types/index';

class Sources {
    public draw(data: Source[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item) => {
                const sourceClone: Node = sourceItemTemp.content.cloneNode(true);
                if (sourceClone instanceof DocumentFragment) {
                    const sourceItemName: Element | null = sourceClone.querySelector('.source__item-name');
                    if (sourceItemName !== null) sourceItemName.textContent = item.name;
                    const sourceItem: Element | null = sourceClone.querySelector('.source__item');
                    if (sourceItem !== null) sourceItem.setAttribute('data-source-id', item.id);

                    fragment.append(sourceClone);
                }
            });

            document.querySelector('.sources')?.append(fragment);
        }
    }
}

export default Sources;
