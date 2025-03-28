import Image from "next/image";
import Menu from "../Menu/Menu";

export default function cabecalho() {
    return (
        <header className="cabecalho">
        <Image src="/CCR-Logo-01.png" alt="Logo da ccr" width={90} height={50} />
        <Menu />
        </header>
    );
}