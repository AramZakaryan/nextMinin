import {useRouter} from "next/router";

export default function Profile() {
    const router = useRouter()
    return (<>
        <h2>Profile</h2>
        <button onClick={()=>router.push("/")}>go back to home</button>
    </>);
}
