import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const imagesGallery = document.querySelector(".gallery");
const createImageMurlUpList = createImageMurlUp(galleryItems)

function createImageMurlUp(gallery) {
    return gallery.map(({ original, preview, description }) => {
        return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
    }).join('');
}

imagesGallery.insertAdjacentHTML("beforeend", createImageMurlUpList);
    
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
