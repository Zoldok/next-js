import { Metadata } from 'next';

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    return {
        title: `${id}`,
        description: `Viewing post ${id}`,
    };
}

export default async function Post({ params }: Props) {
    const { id } = await params;
    return <h1>Post page {id}</h1>;
}
