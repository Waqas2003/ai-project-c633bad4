// Add event listener to add to cart button
document.querySelectorAll('.products button').forEach(button => {
    button.addEventListener('click', () => {
        // Add product to cart logic here
        console.log('Product added to cart');
    });
});