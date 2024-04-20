import Link from "next/link";
import Head from "next/head";
import {Main} from "next/document";
import {MainLayout} from "@/components/Layout";

export default function Index() {
    return (<MainLayout title={"Home"}>
            <Head>
                <meta charSet={"utf8"}/>
                <meta name={"keywords"} content={"next, javascript, react, next"}/>
                <meta name={"description"} content={"this is first task with next"}/>
            </Head>
            <h2>Index</h2>
            {/*<p><Link href={"/about"}>go to about</Link></p>*/}
            {/*<p><Link href={"/profile"}>go to profile</Link></p>*/}
            {/*<p><Link href={"/post/22"}>go to post</Link></p>*/}
        </MainLayout>
    );
}
