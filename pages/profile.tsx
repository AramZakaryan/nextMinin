import {useRouter} from "next/router";
import {MainLayout} from "@/components/Layout";

export default function Profile() {
    const router = useRouter()
    return (<MainLayout title={"Profile"}>
        <h2>Profile</h2>
        <button onClick={()=>router.push("/")}>go back to home</button>
    </MainLayout>);
}
