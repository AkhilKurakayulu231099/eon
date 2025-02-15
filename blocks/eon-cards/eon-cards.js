import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const ul = document.createElement('ul');
  
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
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  });
  
  block.textContent = '';
  block.append(ul);
}
