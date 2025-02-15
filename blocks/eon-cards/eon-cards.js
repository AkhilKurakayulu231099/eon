import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const ul = document.createElement('ul');

  // Create the left and right arrows using the provided SVG
  const arrowLeft = document.createElement('div');
  arrowLeft.classList.add('arrow-left');
  arrowLeft.innerHTML = `
    <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.957 11.207a1 1 0 01-1.414 0l-4.5-4.5a1 1 0 010-1.414l4.5-4.5a1 1 0 011.414 1.414L3.164 6l3.793 3.793a1 1 0 010 1.414z"></path>
    </svg>
  `;

  const arrowRight = document.createElement('div');
  arrowRight.classList.add('arrow-right');
  arrowRight.innerHTML = `
    <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.043 11.207a1 1 0 001.414 0l4.5-4.5a1 1 0 000-1.414l-4.5-4.5a1 1 0 00-1.414 1.414L4.836 6l-3.793 3.793a1 1 0 000 1.414z"></path>
    </svg>
  `;

  block.append(arrowLeft, arrowRight);  // Append the arrows directly to the block

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    
    while (row.firstElementChild) li.append(row.firstElementChild);

    [...li.children].forEach((div) => {
      if (div.querySelector('picture')) {
        div.classList.add('cardimage');
      } else if (div.querySelector('h4') && div.querySelector('h4').textContent.trim()) {
        div.classList.add('cardheader');
      } else if (div.querySelector('a')) {
        div.classList.add('cardlink');
      }
    });

    ul.append(li);
  });

  ul.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])); // Create optimized pictures
  });

  block.textContent = '';
  block.append(ul);

  // Arrow functionality: Scroll the ul when the arrows are clicked
  arrowLeft.addEventListener('click', () => {
    ul.scrollBy({ left: -320, behavior: 'smooth' }); // Scroll left
  });

  arrowRight.addEventListener('click', () => {
    ul.scrollBy({ left: 320, behavior: 'smooth' }); // Scroll right
  });
}
