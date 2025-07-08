window.onload = function () {
  loadStories();
};

function postStory() {
  const name = document.getElementById('name').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (name && title && content) {
    const newStory = {
      name: name,
      title: title,
      content: content
    };
    let stories = JSON.parse(localStorage.getItem('stories')) || [];
    stories.push(newStory);
    localStorage.setItem('stories', JSON.stringify(stories));
    document.getElementById('name').value = '';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    loadStories();
  } else {
    alert('Please fill out all fields.');
  }
}

function loadStories() {
  const storyList = document.getElementById('storyList');
  storyList.innerHTML = '';

  const stories = JSON.parse(localStorage.getItem('stories')) || [];

  stories.forEach(story => {
    const storyHTML = `
      <div class="story">
        <h3>${story.title}</h3>
        <p><strong>${story.name}</strong> says:</p>
        <p>${story.content}</p>
      </div>
    `;
    storyList.innerHTML += storyHTML;
  });
}
