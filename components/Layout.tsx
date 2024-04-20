import {ReactNode} from "react";
import Link from "next/link";
import Head from "next/head";

type Props ={
    children:ReactNode
    title: string
}
export function MainLayout({children, title="ZA Next app"}:Props) {
    return (<>
    <Head>
        <title>{title}</title>
    </Head>
        <nav>
            <Link href={"/"} >go to home</Link> <span> - </span>
            <Link href={"/profile"}>go to profile</Link><span> - </span>
            <Link href={"/about"}>go to about</Link><span> - </span>
            <Link href={"/posts"}>go to posts</Link>
            <Link href={"/post/22"}>go to post</Link>
        </nav>
        <main>{children}</main>
        <style jsx>{`
            nav {
                position: fixed;
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 60px;
                top:0;
                left: 0;
                right: 0;
                background: #094067;
                text-decoration: none;
                }
            main {
                margin-top: 60px;
                padding-top: 1rem;
            }
            
        
        `}</style>
    </>);
}
