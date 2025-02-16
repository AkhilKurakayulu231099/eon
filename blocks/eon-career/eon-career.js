export default async function decorate(block) {
  var homeDiv1 = document.querySelector('.eon-career > div > div');
  homeDiv1.classList.add('eoncareerimg');

  var homeDiv2 = document.querySelector('.eon-career > div > div:nth-child(2)');
  homeDiv2.classList.add('eoncareertxt');
}
