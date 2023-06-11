// Dog objects
const dog1 = {
heading: "Bucket Case",
image: "images/black-dog.jpg",
caption: "Just hanging out waiting for water",
altTag: "Black dog in bucket."
};
const dog2 = {
heading: "Hungry Buddy",
image: "images/gold-dog.jpg",
caption: "My owner making food for me",
altTag: "Brown dog waiting for something."
};
const dog3 = {
heading: "Dog With Snowmen",
image: "images/snow-dog.jpg",
caption: "Snatched snowmen stick lol",
altTag: "Dog in snow."
};
const dog4 = {
heading: "True Love",
image: "images/white-dogs.jpg",
caption: "My love for my cute Baby",
altTag: "White dog with baby ."
};

function chooseDog(dog) {
if (dog == 1) {
loadMe(dog1, 1) // don't put dog1 in quotes or it will pass a string not the object
    }
    else if (dog == 2) {
loadMe(dog2, 2) // don't put dog1 in quotes or it will pass a string not the object
    }
    else if (dog == 3) {
loadMe(dog3, 3) // don't put dog1 in quotes or it will pass a string not the object
    }
    else if (dog == 4) {
loadMe(dog4, 4) // don't put dog1 in quotes or it will pass a string not the object
}
}
function loadMe(dog, dogNum) {
document.getElementById("heading" + dogNum).innerHTML = dog.heading;
document.getElementById("img" + dogNum).src = dog.image;
document.getElementById("img" + dogNum).style.display = "block";
document.getElementById("p" + dogNum).innerHTML = dog.caption;
document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}