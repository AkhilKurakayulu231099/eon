export default async function decorate(block) {
  var homeDiv1 = document.querySelector('.eon-home > div');
  homeDiv1.classList.add('eonhomeimg');

  var homeDiv2 = document.querySelector('.eon-home > div:nth-child(2)');
  homeDiv2.classList.add('eonhometransimg');

  var homeDiv3 = document.querySelector('.eon-home > div:nth-child(3)');
  homeDiv3.classList.add('eonhomelink');
}
