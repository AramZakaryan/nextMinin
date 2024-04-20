import {useRouter} from "next/router";
import {MainLayout} from "@/components/Layout";
import Link from "next/link";
import {GetStaticProps, NextPageContext} from "next";
import Posts, {PostType} from "@/pages/posts";
import {useEffect, useState} from "react";

export default function Post({postServer}: { postServer: PostType }) {
    const [post, setPost] = useState<PostType>(postServer)

    const {query} = useRouter()

    useEffect(() => {
        async function load() {
            await new Promise(resolve => setTimeout(resolve, 1500))
            const response = await fetch(`http://localhost:4200/posts/${query.id}`)
            const json = await response.json()
            setPost(json)
        }

        if (!postServer) load()

    }, []);

    if (!post) {
        return (
            <MainLayout title={"..."}>
                <h2>loading ...</h2>
            </MainLayout>
        )
    }


    return (
        <MainLayout title={`Post ${query.id}`}>
            <h2>{post && post.title}</h2>
            <hr/>
            <p>{post && post.description}</p>
            <Link href={"/posts"}>to back to Posts</Link>
        </MainLayout>
    )
}

Post.getInitialProps = async ({query, req}: NextPageContext) => {
    const id = query.id
    if (!req) return {postServer: null}
    await new Promise(resolve => setTimeout(resolve, 1500))
    const response = await fetch(`http://localhost:4200/posts/${id}`)
    const postServer = await response.json()
    return {postServer}
}