
    window.onload = function() {
      const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
      const result = document.getElementById('result');

      savedComments.forEach(comment => {
        const newDiv = `<div class="new">${comment}</div>`;
        result.innerHTML += newDiv;
      });
    };

    function fun() {
      const comment = document.getElementById("input").value.trim();
      const result = document.getElementById("result");

      if (comment !== '') {
        const newcomment = `<div class="new">${comment}</div>`;
        result.innerHTML += newcomment;

        // Save to localStorage
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));

        // Clear the input
        document.getElementById("input").value = '';
      }
    }
  
