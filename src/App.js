import Component from './Component.js';

export class App extends Component {

    renderHTML() {
        return /*html*/ `
        <div>
            <header>
                <div class="logo">
                    <img src="/assets/logo-2.png" alt="logo image">
                </div>
                <h1>Horned Creatures</h1>
                <div id="grow"></div>
                <div id="nav-container">
                    <a href="/" class="nav-item">Nav 1</a>
                    <a href="/" class="nav-item">Nav 2</a>
                    <a href="/" class="nav-item">Nav 3</a>
                </div>
            </header>
            <main>
                <section id="options-panel">
                    <select name="filter" id="filter">
                        <option value="">Filter by keyword</option>
                        <option value="narwhal">narwhal</option>
                        <option value="rhino">rhino</option>
                    </select>
                    <select name="sort" id="sort">
                        <option value="">Choose a sort option</option>
                        <option value="horns">Sort by number of horns</option>
                        <option value="title">Sort by title of creature</option>
                    </select>
                </section>
                <section id="gallery"></section>
            </main >
        </div>
        `;
    }

}