function makeimageCarousel(
  prevImgBtn,
  nextImgBtn,
  pictureFrame,
  nextImageInterval
) {
  let carousel = {
    _currentImageIndex: 0,

    imageNodes: document.querySelectorAll('#pictureFrame > img'),

    length: document.querySelectorAll('#pictureFrame > img').length,

    get currentImageIndex() {
      return Math.abs(this._currentImageIndex);
    },
    set currentImageIndex(index) {
      this._currentImageIndex = index;
      this._currentImageIndex %= this.length;
    },
  };

  function displayCurrentImage(index) {
    pictureFrame.insertBefore(
      carousel.imageNodes[index],
      pictureFrame.children[0]
    );
  }

  function displayNextImage() {
    carousel.currentImageIndex += 1;
    displayCurrentImage(carousel.currentImageIndex);
  }

  function displayPrevImage() {
    carousel.currentImageIndex -= 1;
    displayCurrentImage(carousel.currentImageIndex);
  }

  const carouselParent = pictureFrame.parentElement.parentElement;
  const selectImageButtons = document.createElement('div');
  for (let i = 0; i < carousel.length; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
      displayCurrentImage(i);
    });

    selectImageButtons.appendChild(button);
  }

  carouselParent.insertBefore(selectImageButtons, prevImgBtn);

  nextImgBtn.addEventListener('click', displayNextImage);
  prevImgBtn.addEventListener('click', displayPrevImage);

  if (nextImageInterval) {
    setInterval(displayNextImage, nextImageInterval);
  }
}

export default makeimageCarousel;
