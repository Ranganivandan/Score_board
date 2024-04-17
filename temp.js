var count1 = 0;
var count2 = 0;

var points1 = document.getElementById("card1h1");
var points2 = document.getElementById("card2h2");

var photo1 = document.getElementById("smile1");
var photo2 = document.getElementById("smile2");

function decrease1() {
    if (count1 <= 0) {
        alert("You've reached the limit");
    } else {
        count1--;
        points1.innerHTML = count1;
        updateImage(photo1, count1);
    }
}

function decrease2() {
    if (count2 <= 0) {
        alert("You've reached the limit");
    } else {
        count2--;
        points2.innerHTML = count2;
        updateImage(photo2, count2);
    }
}

function increase1() {
    count1++;
    points1.innerHTML = count1;
    updateImage(photo1, count1);
}

function increase2() {
    count2++;
    points2.innerHTML = count2;
    updateImage(photo2, count2);
}

function updateImage(photo, count) {
    if (count > 2) {
        // Change the image source when count exceeds 2
        photo.src = "https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093";
    }
    // You can add else condition to revert the image source when count goes back to 2 or below
}

// Initial image update based on initial counts
updateImage(photo1, count1);
updateImage(photo2, count2);
