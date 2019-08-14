export function renderCardItem(data) {
    const card = /*html*/ `
        <div class="card">
            <div class="badge">${data.horns}</div>
            <img class="gallery-image" src="${data.url}" alt="image of ${data.title}">
            <div class="gallery-text"> 
                <h2>${data.title}</h2>
                <p>${data.description}</p>
            </div>
        </div>
    `;

    return card;
}