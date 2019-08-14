import Component from './Component.js';
import { renderCardItem } from './render-card-item.js';

export class Card extends Component {
    renderHTML(){
        return renderCardItem(this.props);
    }

}