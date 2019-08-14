import Component from './Component.js';

export class Sort extends Component {
    renderHTML() {
        return /*html*/`
            <select name="sort" id="sort">
                <option value="" selected hidden>Sort by option</option>
                <option value="horns">Number of Horns</option>
                <option value="title">Title of Creature</option>
            </select>
        `;
    }
}