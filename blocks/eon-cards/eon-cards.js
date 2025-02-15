export default async function decorate(block) {
  var homeDiv1 = document.querySelector('.eon-video > div > div');
  homeDiv1.classList.add('lefttext');

  var homeDiv2 = document.querySelector('.eon-video > div > div:nth-child(2)');
  homeDiv2.classList.add('rightvideo');

  var videoUrl = homeDiv2.querySelector('p').textContent.trim();

  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    const videoId = videoUrl.split('v=')[1]?.split('&')[0] || videoUrl.split('youtu.be/')[1];

    homeDiv2.innerHTML = `
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
    `;
  }
}
