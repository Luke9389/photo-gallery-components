import Component from './Component.js';
import { Card } from './Card.js';

export class Gallery extends Component {

    renderHTML() {
        return /*html*/ `
        <section id="gallery">
            <div class="card">
                <div class="badge">1</div>
                <img class="gallery-image" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="UniWhal image">
                <div class="gallery-text">
                    <h2>UniWhal</h2>
                    <p>A unicorn and a narwhal nuzzling their horns</p>
                </div>
            </div>
        </section>
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
