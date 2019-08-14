import Component from './Component.js';
import { Card } from './Card.js';

export class Gallery extends Component {

    renderHTML() {
        return /*html*/ `
        <section id="gallery"></section>
        `;

    }

    onRender(dom) {
        const props = this.props.images;
        props.forEach(image => {
            const card = new Card(image);
            dom.appendChild(card.renderDOM());
        });

    }
}
