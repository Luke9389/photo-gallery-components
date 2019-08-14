import Component from './Component.js';

export class Header extends Component {
    renderHTML() {
        return /*html*/`
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
        `;
    }
}