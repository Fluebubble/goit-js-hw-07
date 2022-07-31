import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
    .map(item => 
        `        
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`  
    )
    .join("")

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", () => {});

const lightBoxImg = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
