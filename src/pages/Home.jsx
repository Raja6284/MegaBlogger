

import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div 
                className="w-full py-8 mt-4 flex items-center justify-center bg-cover bg-center min-h-[70vh] px-4"
                style={{ backgroundImage: "url('/bg_image.jpg')" }}
            >
                <Container>
                    <div className="flex justify-center">
                        <div className="p-6 bg-gray-800 bg-opacity-75 rounded-lg max-w-md w-full text-center">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Login to read posts
                            </h1>
                            <p className="text-gray-300 text-sm mb-2">Use the demo credentials below:</p>
                            <div className="bg-gray-700 p-3 rounded-md text-white text-sm">
                                <p><strong>Email:</strong> raja@gmail.com</p>
                                <p><strong>Password:</strong> 123456789</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
