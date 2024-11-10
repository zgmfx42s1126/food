let profile = document.querySelector('.sidebar .profile');
let navbar = document.querySelector('.sidebar .navbar');

document.querySelector('#user-btn').onclick = () => {
   profile.classList.toggle('active');
   navbar.classList.remove('active'); // Hide the navbar if it’s visible
}

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   profile.classList.remove('active'); // Hide the profile if it’s visible
}

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}

subImages = document.querySelectorAll('.update-product .image-container .sub-images img');
mainImage = document.querySelector('.update-product .image-container .main-image img');

subImages.forEach(images =>{
   images.onclick = () =>{
      let src = images.getAttribute('src');
      mainImage.src = src;
   }
});