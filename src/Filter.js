import Component from './Component.js';

export class Filter extends Component {
    renderHTML() {
        return /*html*/`
            <select name="filter" id="filter">
                <option value="" selected hidden>Filter by keyword</option>
                <option value="narwhal">narwhal</option>
                <option value="rhino">rhino</option>
            </select>
        `;
    }
}