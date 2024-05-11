function makeimageCarousel(prevImgBtn, nextImgBtn, container, pictureFrame) {
  let carousel = {
    _currentImageIndex: 0,

    imageNodes: document.querySelectorAll('#pictureFrame > img'),

    _length: document.querySelectorAll('#pictureFrame > img').length, // 3

    get currentImageIndex() {
      return Math.abs(this._currentImageIndex);
    },
    set currentImageIndex(index) {
      this._currentImageIndex = index;

      if (this.currentImageIndex >= this._length) {
        this._currentImageIndex = 0;
      }
    },
  };

  function displayCurrentImage(index) {
    pictureFrame.insertBefore(
      carousel.imageNodes[index],
      carousel.imageNodes[0]
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

  nextImgBtn.addEventListener('click', displayNextImage);
  prevImgBtn.addEventListener('click', displayPrevImage);
}

export default makeimageCarousel;
