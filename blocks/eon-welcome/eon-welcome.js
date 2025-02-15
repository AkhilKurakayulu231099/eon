export default async function decorate(block) {
  var homeDiv1 = document.querySelector('.eon-welcome > div > div');
  homeDiv1.classList.add('eonwelcomeleft');

  var homeDiv2 = document.querySelector('.eon-welcome> div > div:nth-child(2)');
  homeDiv2.classList.add('eonwelcomeright');
}
