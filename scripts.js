document.addEventListener('DOMContentLoaded', function () {
    const blogList = document.getElementById('blog-list');
    const addPostForm = document.getElementById('add-post-form');

    addPostForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            const post = createPost(title, content);
            blogList.appendChild(post);

            // Clear the form fields
            document.getElementById('title').value = '';
            document.getElementById('content').value = '';
        }
    });

    function createPost(title, content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const contentElement = document.createElement('p');
        contentElement.textContent = content;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function () {
            blogList.removeChild(postDiv);
        });

        postDiv.appendChild(titleElement);
        postDiv.appendChild(contentElement);
        postDiv.appendChild(deleteButton);

        return postDiv;
    }
});
