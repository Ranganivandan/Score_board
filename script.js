var count1 = 0;
var count2 = 0;

var points1 = document.getElementById("card1h1");
var points1 = document.getElementById("card1h1");
var points2 = document.getElementById("card2h2");
var points2 = document.getElementById("card2h2");

var photo1 = document.getElementById("simle1");
var photo2 = document.getElementById("smile2");

function initialization() {
  localStorage.setItem("count1", 0);
  localStorage.setItem("count2", 0);
  localStorage.setItem(
    "photo1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxhZNCcSV-TNe0qBQxthfXSN9TO1qZaGfYrTihr96AA&s"
  );
  localStorage.setItem(
    "photo2",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYeQfdfc3Gv_Z-wGLFIGPAibLQOy2NdmX453IrQok6StMBHCW5RpqOKtBKnBKQa_XlLI&usqp=CAU"
  );
  points1.innerHTML = localStorage.getItem("count1");
  points2.innerHTML = localStorage.getItem("count2");

  photo1.src = localStorage.getItem("photo1");
  photo2.src = localStorage.getItem("photo2");
}

function reset() {
  localStorage.clear();
  initialization();
}

function decrese1() {
  if (count1 <= 0) {
    alert("you touch the limit");
  } else {
    count1--;
    points1.innerHTML = count1;
  }
}

function decrese2() {
  if (count2 <= 0) {
    alert("you touch the limit");
  } else {
    count2--;
    points2.innerHTML = count2;
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
  localStorage.setItem("count2", count1);
  localStorage.setItem("photo2", "change2.png");
}

function updateImage(photo, count) {
  if (count > 2) {
    photo.src =
      "https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093";
  }
}
