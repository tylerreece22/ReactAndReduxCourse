import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 451d7628c20e8f0b1b92f9450bc0e15d1a6be3a22dec857134ec779f0f2ec094'
    }
});