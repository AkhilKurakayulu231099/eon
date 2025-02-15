export default async function decorate(block) {
  // Select the left and right div elements
  var homeDiv1 = document.querySelector('.eon-video > div > div');
  homeDiv1.classList.add('lefttext');

  var homeDiv2 = document.querySelector('.eon-video > div > div:nth-child(2)');
  homeDiv2.classList.add('rightvideo');

  // Get the YouTube URL from the rightvideo container
  var videoUrl = homeDiv2.querySelector('p').textContent.trim();

  // Check if the URL contains a valid YouTube link
  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    // Extract the YouTube video ID from the URL
    const videoId = videoUrl.split('v=')[1]?.split('&')[0] || videoUrl.split('youtu.be/')[1];

    // Replace the <p> content with an iframe that embeds the YouTube video
    homeDiv2.innerHTML = `
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
    `;
  }
}
