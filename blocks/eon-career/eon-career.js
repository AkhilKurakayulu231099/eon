export default async function decorate(block) {
  var homeDiv1 = document.querySelector('.eon-ceo > div > div');
  homeDiv1.classList.add('eonceoimg');

  var homeDiv2 = document.querySelector('.eon-ceo > div > div:nth-child(2)');
  homeDiv2.classList.add('eonceotxt');
}
