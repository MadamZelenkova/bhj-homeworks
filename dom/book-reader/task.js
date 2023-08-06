const sizeList = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");

sizeList.forEach((element) => {
  element.addEventListener("click", function (event) {
    sizeList.forEach((el) => {
      el.classList.remove("font-size_active");
    });

    this.classList.add("font-size_active");
    event.preventDefault();

    const newSize = this.getAttribute("data-size");

    if (newSize === "small") {
      book.classList.remove("book_fs-big");
      book.classList.add("book_fs-small");
    } else if (newSize === "big") {
      book.classList.remove("book_fs-small");
      book.classList.add("book_fs-big");
    } else {
      book.classList.remove("book_fs-small", "book_fs-big");
    }
  });
});

const textColors = document.querySelectorAll(".book__control_color .color");
const bgColors = document.querySelectorAll(".book__control_background .color");

textColors.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    textColors.forEach((el) => el.classList.remove("color_active"));
    this.classList.add("color_active");

    const currentColor = this.getAttribute("data-text-color");
    book.classList.remove(
      "book_color-black",
      "book_color-gray",
      "book_color-whitesmoke"
    );
    book.classList.add("book_color-" + currentColor);
  });
});

bgColors.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    bgColors.forEach((el) => el.classList.remove("color_active"));
    this.classList.add("color_active");

    const currentColor = this.getAttribute("data-bg-color");
    book.classList.remove(
      "book_bg-black", 
      "book_bg-gray", 
      "book_bg-white"
    );
    book.classList.add("book_bg-" + currentColor);
  });
});
