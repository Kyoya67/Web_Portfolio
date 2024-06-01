import style from 'styles/logo.module.css'
import Link from 'next/link'

export default function Logo({ boxOn = false }) {
    return (
        <Link href="/">
            <div className={boxOn ? style.box : style.basic}>CUBE</div>
        </Link>
    )
}