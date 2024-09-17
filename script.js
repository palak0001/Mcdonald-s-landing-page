function imgSlider(imageSource) {
    // Get the main image element
    const mainImage = document.querySelector('.starbucks');
    
    // Change the source of the main image
    mainImage.src = imageSource;
    
    // Set the size for all images inside the circle
    mainImage.style.maxWidth = '500px';  // You can change the size as needed
    mainImage.style.maxHeight = '500px';
    mainImage.style.transition = 'all 0.5s ease';  // Smooth transition
    mainImage.style.objectFit = 'contain';  // Keep the image contained within the circle
}
