//  Добавление товара в корзину

var addBtn = document.querySelectorAll('.addBtn');

var myFunction = function (evt) {
  evt.preventDefault();
  var titles = this.parentNode.querySelectorAll('.img__textd span');
  var images = this.parentNode.querySelectorAll('.slide__link img');
  var price = this.parentNode.querySelectorAll('.img__text span');
  console.log(titles);
  console.log(price);
  console.log(images);
};

for (var i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener('click', myFunction, false);

}



// var addBtn = document.querySelectorAll('.addBtn');
// console.log(addBtn);

// var myFunction = function (evt) {
//   evt.preventDefault();
//   console.log('hello');
// };
// for (var i = 0; i < addBtn.length; i++ ) {
//   addBtn[i].addEventListener('click', myFunction, false);
// }

