var count1 = 0;
var count2 = 0;

var count1 = localStorage.getItem("count1")
  ? parseInt(localStorage.getItem("count1"))
  : 0;
var count2 = localStorage.getItem("count2")
  ? parseInt(localStorage.getItem("count2"))
  : 0;

var points1 = document.getElementById("card1h1");
var points1 = document.getElementById("card1h1");
var points2 = document.getElementById("card2h2");
var points2 = document.getElementById("card2h2");

var photo1 = document.getElementById("simle1");
var photo2 = document.getElementById("smile2");

function decrese1() {
  if (count1 <= 0) {
    alert("you touch the limit");
  } else {
    count1--;
    points1.innerHTML = count1;
    localStorage.setItem("count1", count1);
  }
}

function decrese2() {
  if (count2 <= 0) {
    alert("you touch the limit");
  } else {
    count2--;
    points2.innerHTML = count2;
    localStorage.setItem("count2", count2);
  }
}

function increse1() {
  count1++;
  points1.innerHTML = count1;

  if (count1 > 2) {
    photo1.src =
      "https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093";
    photo1.style.width = "35vh";
    photo1.style.height = "35vh";
  }
  localStorage.setItem("count1", count1);
  localStorage.setItem(
    "photo1",
    "https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093"
  );
}

function increse2() {
  count2++;
  points2.innerHTML = count2;

  if (count2 > 2) {
    photo2.src = "change2.png";

    photo2.style.width = "35vh";
    photo2.style.height = "35vh";
  }
  localStorage.setItem("count1", count1);
  localStorage.setItem(
    "photo1",
    "https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093"
  );
}

function updateImage(photo, count) {
  if (count > 2) {
    photo.src =
      "https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093";
  }
}
