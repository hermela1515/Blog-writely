
function postStory() {
  const name = document.getElementById("name").value.trim();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const storyList = document.getElementById("storyList");

  if (name && title && content) {
    const storyDiv = document.createElement("div");
    storyDiv.className = "story";
    storyDiv.innerHTML = `
      <h3>${title}</h3>
      <p><strong>by ${name}</strong></p>
      <p>${content}</p>
      <hr/>
    `;
    storyList.prepend(storyDiv);

    
    document.getElementById("name").value = "";
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  } else {
    alert("Please fill in all fields before submitting.");
  }
}
async function fetchExternalStories() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const stories = await response.json();
    const storyList = document.getElementById("storyList");

    stories.forEach(story => {
      const storyDiv = document.createElement("div");
      storyDiv.className = "story";
      storyDiv.innerHTML = `
        <h3>${story.title}</h3>
        <p><strong>by Guest Author</strong></p>
        <p>${story.body}</p>
        <hr/>
      `;
      storyList.appendChild(storyDiv); 
    });
  } catch (error) {
    console.error("Error fetching external stories:", error);
  }
}

window.onload = fetchExternalStories;
