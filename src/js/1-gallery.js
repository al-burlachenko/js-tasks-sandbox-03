import images from './data';
// console.log(images);
const galleryRoot = document.querySelector('.gallery');

if (galleryRoot) {
  const data = images
    .map(image => {
      const { description, original, preview } = image;
      return `<li class="gallery-item">
	<a class="gallery-link" href="${original}">
		<img 
		  class="gallery-image" 
		  src="${preview}" 
		  alt="${description}" 
		/>
	</a>
</li>`;
    })
    .join('');
  galleryRoot.insertAdjacentHTML('beforeend', data);

  galleryRoot.addEventListener('click', event => {
    event.preventDefault();
  });

  //   galleryRoot.addEventListener('click', event => {
  //     event.preventDefault();
  //     if (event.target.classList.contains('gallery-image')) {
  //       const instance = basicLightbox.create(
  //         `
  //         <img src="${event.target.dataset.original}" data-original="${event.target.dataset.original}" alt="${event.target.alt}"  class="slideshowImage">
  // `,
  //         {
  //           onShow: () => {
  //             document.addEventListener('keydown', throttledNavigate);
  //           },
  //           onClose: () => {
  //             document.removeEventListener('keydown', throttledNavigate);
  //           },
  //         }
  //       );

  //       function onNavigate(event) {
  //         if (event.code === 'Escape' || !instance.visible()) {
  //           instance.close();
  //           return;
  //         }

  //         const dataArr = images.map(item => item.original);
  //         const currentImage = document.querySelector('.slideshowImage');
  //         if (!currentImage) return;
  //         if (instance.visible()) {
  //           let index = dataArr.indexOf(currentImage.dataset.original);
  //           if (event.code === 'ArrowRight') index += 1;
  //           if (event.code === 'ArrowLeft') index -= 1;

  //           if (index > dataArr.length - 1) index = 0;
  //           if (index < 0) index = dataArr.length - 1;

  //           currentImage.src = dataArr[index];
  //           currentImage.dataset.original = dataArr[index];
  //         }
  //       }
  //       const throttledNavigate = _.throttle(onNavigate, 400);
  //       instance.show();
  //     }
  //   });
}
