const burger = document.querySelector('.menu');
const tag = document.querySelector('.fa');
const menu = document.querySelector('.nav-links')

//open and close menu
burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  tag.classList.toggle('fa-times');
})


// Define selector for selecting anchor links with the hash
let anchorSelector = 'a[href^="#"]';
     
// Collect all such anchor links
let anchorList = document.querySelectorAll(anchorSelector);
 
// Iterate through each of the links
anchorList.forEach(link => {
    link.onclick = function (e) {

        // Prevent scrolling if the hash value is blank
        e.preventDefault();
 
        // Get the destination to scroll to using the hash property
        let destination = document.querySelector(this.hash); //or e.target.hash
 
        // Scroll to the destination using scrollIntoView method
        destination.scrollIntoView({
            behavior: 'smooth'
        });

        //close up menu after scroll
        menu.classList.toggle('active');
        tag.classList.toggle('fa-times');
    }
});