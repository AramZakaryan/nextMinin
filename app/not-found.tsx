import Link from 'next/link'
import s from "./not-found.module.css"

export default function NotFound() {
    return (
        <div>
            <h2 className={s.h2error}>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/public">Return Home</Link>
        </div>
    )
}