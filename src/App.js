import Component from './Component.js';
import { Header } from './Header.js';
import { Filter } from './Filter.js';
import { Sort } from './Sort.js';

export class App extends Component {

    renderHTML() {
        return /*html*/ `
            <main>
                <section id="options-panel"></section>
                <section id="gallery"></section>
            </main >
        `;
    }

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const filter = new Filter();
        dom.querySelector('#options-panel').appendChild(filter.renderDOM());

        const sort = new Sort();
        dom.querySelector('#options-panel').appendChild(sort.renderDOM());
    }

}