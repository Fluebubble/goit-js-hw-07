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

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    console.log(event.target.src);

    const lightBoxImg = new SimpleLightbox('.gallery a', {
        // sourceAttr: `${event.target.src}`,

    })

    lightBoxImg.open();
}