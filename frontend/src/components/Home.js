import React, { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../api';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPosts();
                console.log(data); // Logging fetched data
                setPosts(data); // Set posts directly from fetched data
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deletePost(id); // Trying to delete post
            setPosts(posts.filter(post => post._id !== id)); // Update state after deleting
        } catch (error) {
            console.error("Error deleting post:", error); // Logging errors
        }
    };

    return (
        <div>
            <h2>CATHY Blog Project</h2>
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post._id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <button onClick={() => handleDelete(post._id)}>Delete</button>
                    </div>
                ))
            ) : (
		<>
                <p>WELCOME to CATHY Blog Project</p>
		    <p>Here you can sign up, login and be creative with your imagination by making posts</p>

		    <p>Contact us via Linkedin: Catherine Oriavwote</p>
	      </>
            )}
        </div>
    );
};

export default Home;
