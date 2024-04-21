import {useRouter} from "next/router";
import {MainLayout} from "@/components/Layout";
import Link from "next/link";
import {GetStaticProps, NextPageContext} from "next";
import Posts, {PostType} from "@/pages/posts";
import {useEffect, useState} from "react";
import {redirect} from "next/navigation";

interface Props {
    postFromServer: PostType
}


export default function Post({postFromServer}: Props) {
    const [post, setPost] = useState<PostType>(postFromServer)

    const {query:{id}} = useRouter()

    useEffect(() => {
        async function load() {
            await new Promise(resolve => setTimeout(resolve, 1500))
            const response = await fetch(`${process.env.API_URL}posts/${id}`)
            const json = await response.json()
            setPost(json)
        }

        if (!postFromServer) load()

    }, []);

    if (!post) {
        return (
            <MainLayout title={"..."}>
                <h2>loading ...</h2>
            </MainLayout>
        )
    }


    return (
        <MainLayout title={`Post ${id}`}>
            <h2>{post && post.title}</h2>
            <hr/>
            <p>{post && post.description}</p>
            <Link href={"/posts"}>to back to Posts</Link>
        </MainLayout>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: { id: string }
}

Post.getInitialProps = async ({query, req}: PostNextPageContext) => {
    const id = query.id
    if (!req) return {postServer: null}
    await new Promise(resolve => setTimeout(resolve, 1500)) // for delay
    const response = await fetch(`${process.env.API_URL}posts/${id}`)
    const postFromServer: PostType = await response.json()
    return {postFromServer}
}