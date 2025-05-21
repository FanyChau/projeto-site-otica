import Image from 'next/image';
import estilos from "./SecaoProdutos.module.css";
import oculo1 from '../../../public/oculos01.png';
import oculo2 from '../../../public/oculos02.png';
import oculo3 from '../../../public/oculos03.png';
import oculo4 from '../../../public/oculos04.png';



export default function SecaoProdutos(){
    return(
        <section id="produto" className={estilos.secao_produtos}>
            <div>
                 <h3 className={estilos.titulo_produtos}>Nossos produtos</h3>
            </div>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className={estilos.container_cards}>
            <div className={estilos.card}>
                <h4>Óculos de grau</h4>
                <Image src={oculo1} alt="Imagem Óculo"/>
                <p>R$ 500,00</p>
            </div>
            <div className={estilos.card}>
                <h4>Óculos transition</h4>
                <Image src={oculo2} alt="Imagem Óculo"/>
                <p>R$ 750,00</p>
            </div>
            <div className={estilos.card}>
                <h4>Óculos de sol</h4>
                <Image src={oculo3} alt="Imagem Óculo"/>
                <p>R$ 700,00</p>
            </div>
            <div className={estilos.card}>
                <h4>Óculos infantil</h4>
                <Image src={oculo4} alt="Imagem Óculo"/>
                <p>R$ 500,00</p>
            </div>
            </div>
            <div>
                <h3 className={estilos.subtitulo_lista}>Todos os nossos produtos incluem:</h3>
            </div>
            <ul className={estilos.lista}>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </section>
    )
}