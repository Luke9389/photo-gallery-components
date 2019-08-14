import Component from './Component.js';

export class Filter extends Component {
    onRender(dom) {
        dom.addEventListener('change', () => {
            this.props.onFilter(dom.value);
        });
    }

    renderHTML() {
        return /*html*/`
            <select name="filter" id="filter">
                <option value="" selected hidden>Filter by keyword</option>
                <option value="narwhal">narwhal</option>
                <option value="rhino">rhino</option>
                <option value="unicorn">unicorn</option>
                <option value="unilego">unilego</option>
                <option value="triceratops">triceratops</option>
                <option value="markhor">markhor</option>
                <option value="mouflon">mouflon</option>
                <option value="addax">addax</option>
                <option value="chameleon">chameleon</option>
                <option value="lizard">lizard</option>
                <option value="dragon">dragon</option>
            </select>
        `;
    }
}