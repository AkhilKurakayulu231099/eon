export default async function decorate(block) {
  var homeDiv1 = document.querySelector('.eon-video > div > div');
  homeDiv1.classList.add('lefttext');

  var homeDiv2 = document.querySelector('.eon-video > div > div:nth-child(2)');
  homeDiv2.classList.add('rightvideo');
}
