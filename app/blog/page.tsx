import { Metadata } from 'next';
import Link from 'next/link';

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        },
    });

    if(!response.ok) throw new Error ("unable to fetch posts!")
    return response.json();
}

export const metadata: Metadata = {
    title: 'Blog | Next App',
};

type Post = {
    id: number;
    title: string;
    body: string;
};

export default async function Blog() {
    const posts: Post[] = await getData();
    // console.log('data', posts);

    return (
        <>
            <h1>Blog page</h1>
            <ul>
                {posts.map((post: any) => {
                    return (
                        <li key={post.id}>
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
