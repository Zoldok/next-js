'use client';

import { getPostsBySearch } from '@/services/getPosts';
import { FormEventHandler, useState } from 'react';

type Props = {
    onSearch: (value: any[]) => void;
};

const PostsSearch = ({ onSearch }: Props) => {
    const [search, setSearch] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const posts = await getPostsBySearch(search);

        onSearch(posts);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="search"
                onChange={(event) => setSearch(event.target.value)}
                value={search}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export { PostsSearch };
