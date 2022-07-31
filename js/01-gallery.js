import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
// Создаем разметку с изображениями

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
    .map(item => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                />
            </a>
        </div>`
    )
    .join("")

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    
    window.addEventListener('keydown', onEscPress);

    const lightBoxImagePreview = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`, {
        onClose: () => {
            window.removeEventListener('keydown', onEscPress)
        }
    });
    
    lightBoxImagePreview.show();

    function onEscPress(event) {
        if (event.code === 'Escape') {
            lightBoxImagePreview.close();
        }
    }

};

