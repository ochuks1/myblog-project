import axios from 'axios';

const API_URL = 'http://localhost:3000/api/posts';

export const getPosts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

export const createPost = async (post) => {
    try {
        const response = await axios.post(API_URL, post);
        return response.data;
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
};

export const deletePost = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
};
