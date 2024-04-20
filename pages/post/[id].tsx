import {useRouter} from "next/router";
import {MainLayout} from "@/components/Layout";

export default function Post() {
    const router = useRouter()
    return (<MainLayout title={`Post ${router.query.id}`}>

        <h2>Post {router.query.id}</h2>
        </MainLayout>    );
}
