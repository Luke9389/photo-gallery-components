import Component from './Component.js';
import { Header } from './Header.js';
import { Filter } from './Filter.js';
import { Sort } from './Sort.js';
import { Gallery } from './Gallery.js';
import images from '../assets/images.js';

export class App extends Component {

    renderHTML() {
        return /*html*/ `
            <main>
                <section id="options-panel"></section>
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

        const props = { images };

        const gallery = new Gallery(props);
        dom.appendChild(gallery.renderDOM());
    }

}