const apiUrl = 'http://localhost:5000/api/posts';

async function fetchPosts() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const posts = await response.json();
    return posts;
}

async function renderPosts() {
    const posts = await fetchPosts();
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = posts.map(post => `<div>${post.content}</div>`).join('');
}

async function createPost() {
    const postContent = document.getElementById('new-post').value;
    if (postContent) {
        await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: postContent }),
        });
        document.getElementById('new-post').value = '';
        renderPosts(); // Refresh all post list
    }
}

function showHome() {
    document.getElementById('main-content').innerHTML = `
        <h2>Blog Posts</h2>
        <div id="posts"></div>
        <textarea id="new-post" placeholder="Create a new blog post..."></textarea>
        <button onclick="createPost()">Submit Post</button>
    `;
    renderPosts(); // Load posts when showing home
}

function showLogin() {
    document.getElementById('main-content').innerHTML = `
        <h2>Login</h2>
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
        <button>Login</button>
    `;
}

function showSignup() {
    document.getElementById('main-content').innerHTML = `
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
        <button>Sign Up</button>
    `;
}

// Load home content when page loads
document.addEventListener('DOMContentLoaded', showHome)
