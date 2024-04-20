import {MainLayout} from "@/components/Layout";
import Link from "next/link";
import {useEffect, useState} from "react";
import {NextPageContext} from "next";


export default function Posts({postsServer}: { postsServer: PostType[] }) {
    const [posts, setPosts] = useState(postsServer)

    useEffect(() => {
        async function load() {
            await new Promise(resolve => setTimeout(resolve, 1500))
            const response = await fetch("http://localhost:4200/posts")
            const json = await response.json()
            setPosts(json)
        }

        if (!postsServer) load()
    }, []);


    return (
        <MainLayout title={"Posts"}>
            <h2>Posts </h2>
            <ul>
                {posts ?
                    posts.map(p =>
                        <li key={p.id}>
                            <Link href={`/post/${p.id}`}>{p.title}</Link>
                        </li>
                    ) :
                    <p>loading ....</p>
                }
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
    if (!req) return {postsServer: null}
    await new Promise(resolve => setTimeout(resolve, 1500))
    const response = await fetch("http://localhost:4200/posts")
    const postsServer = await response.json()
    return {postsServer}
}

export type PostType = {
    id: number
    title: string,
    description: string
}