let currentIndex = 0;

    function showImage(index) {
        const imageList = document.querySelector('.image__holder');
        const imageWidth = document.querySelector('.image').clientWidth;

        // Calculate the new position of the image list
        const newPosition = -index * imageWidth;

        // Move the image list to the new position
        imageList.style.transform = `translateX(${newPosition}px)`;

        currentIndex = index;
    }

    function nextImage() {
        if (currentIndex < document.querySelectorAll('.image').length - 1) {
            showImage(currentIndex + 1);
        }
    }

    function prevImage() {
        if (currentIndex > 0) {
            showImage(currentIndex - 1);
        }}



