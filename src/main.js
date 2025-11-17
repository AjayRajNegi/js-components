const items = document.querySelectorAll(".item");
// console.log(items);

function t() {
  items.forEach((item) => {
    item.style.transform = `translateX(-100%)`;
  });
}
const timer = setInterval(() => {
  t();
}, 2000);
