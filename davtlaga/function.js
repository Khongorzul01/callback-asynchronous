// 3 шоог хаяхад буух тооны тэнцүү болон их эсэхийг шалгах проггамм бич
function shoo() {
  let dice = Math.floor(Math.random() * 6) + 1;
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;

  if (dice > dice1) {
    return `${dice}, ${dice1}, "dice";`;
  } else if (dice === dice1) {
    return "equal";
  } else {
    return "dice1";
  }
}

document.getElementById("answer").addEventListener("click", function () {
  console.log(shoo());
});
