//store the images in a constant
const images = [
    "img1",
    "img2",
    "img3",
    "img4",
];

//get all bottons
const buttons = document.querySelectorAll(".btn");
//get the image display field
const imageDiv = document.querySelector(".imgDiv");
//set count to 0
let count = 0;

//loop thru the buttons and declare a function
buttons.forEach(function(button) {
    button.addEventListener("click", (e) => {
        if (button.classList.contains("btn-left")) {
            count--
            if (count < 0) {
                count = images.length-1;
            }
            imageDiv.style.backgroundImage = `url('img/${images[count]}.jpg')`;
        } else {
            count++
            if (count > images.length-1) {
                count = 0;
            }
            imageDiv.style.backgroundImage = `url('img/${images[count]}.jpg')`;
        }
    });
});