export default async function decorate(block) {
  var maindiv = document.querySelector('.eon-cards > div');
  maindiv.classList.add('cardsdiv');

  var subdiv1 = document.querySelector('.eon-cards > div > div');
  subdiv1.classList.add('cardimage');

  var subdiv2 = document.querySelector('.eon-cards > div > div:nth-child(2)');
  subdiv2.classList.add('cardheader');

  var subdiv3 = document.querySelector('.eon-cards > div > div:nth-child(3)');
  subdiv3.classList.add('cardlink');
}
