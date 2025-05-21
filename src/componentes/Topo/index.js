import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.png';
import estilos from "./Topo.module.css";


export default function Topo() {
    return (
        <header className={estilos.container_topo}>
            <Image className={estilos.imagem_logo} src={logo} alt="logomarca"/>
            <div className={estilos.borda}></div>
            <nav className={estilos.container_links}>
            <Link href="#produto">PRODUTOS</Link>
            <Link href="#sobre">SOBRE</Link>
            <Link href="#contato">CONTATO</Link>
            </nav>
       </header>
    )
    
}