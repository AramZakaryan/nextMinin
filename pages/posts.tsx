import {MainLayout} from "@/components/Layout";
import {useEffect, useState} from "react";

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function load() {
            const response = await fetch("http://localhost:4200/posts")
            const json = await response.json()
            setPosts(json)
        }

        load()
    }, []);

    return (
        <MainLayout title={"Posts"}>
            <h2>Posts </h2>
            <pre>{JSON.stringify(posts)}</pre>
        </MainLayout>
    )
}
