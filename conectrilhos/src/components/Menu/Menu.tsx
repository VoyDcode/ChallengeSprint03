import Link from "next/link";

export default function Menu() {
    return (
     <nav>
        <ul>
            <li className="inline p-10"><Link href="/">Home</Link></li>
            <li className="inline p-10"><Link href="/rota">Rota</Link></li>
            <li className="inline p-10"><Link href="/page">Page</Link></li>
        </ul>
     </nav>
    );
}