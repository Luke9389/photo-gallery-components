import { renderCardItem } from '../src/render-card-item.js';
import './html-equal.js';

const test = QUnit.test;

QUnit.module('Card Item');

test('renders card item string', assert => {
    const expected = /*html*/ `
        <div class="card">
            <div class="badge">1</div>
            <img class="gallery-image" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="image of UniWhal">
                <div class="gallery-text">
                    <h2>UniWhal</h2>
                    <p>A unicorn and a narwhal nuzzling their horns</p>
                </div>
            </div>
    `;

    const data = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };
    const results = renderCardItem(data);

    assert.htmlEqual(results, expected);
});