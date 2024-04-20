import type {AppProps} from 'next/app'
import "./../styles/main.css"

export default function MyApp({Component, pageProps}: AppProps) {
    return (<>
        <Component {...pageProps} />
        {/*<style jsx global>*/}
        {/*    {`*/}
        {/*        body{*/}
        {/*            background-color: #fffffe;*/}
        {/*            font-family: "Josefin Sans", sans-serif;*/}
        {/*        }*/}
        {/*        nav a {*/}
        {/*            text-decoration: none;*/}
        {/*            font-weight: bold;*/}
        {/*            color: #90b4ce;*/}
        {/*        }*/}
        {/*    `}*/}
        {/*</style>*/}
    </>)
}