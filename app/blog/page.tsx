'use client';
import { PostsSearch } from '@/components/PostSearch';
import { Posts } from '@/components/Posts';
import { getAllPosts } from '@/services/getPosts';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';

type Post = {
    id: number;
    title: string;
    body: string;
};

export default function Blog() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => setLoading(false));
    }, []);
    return (
        <>
            <h1>Blog page</h1>
            <PostsSearch onSearch={setPosts} />
            {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
        </>
    );
}
