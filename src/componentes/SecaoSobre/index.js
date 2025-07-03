import Image from 'next/image';
import loja from '../../../public/loja.png';
import atendimento from '../../../public/atendimento.png';
import estilos from "./SecaoSobre.module.css";
export default function SecaoSobre() {
    return(
        <section id="sobre" className={estilos.secao_sobre}>
            <div className={estilos.container_textos}>
                <h3>QUEM SOMOS NÓS?</h3>
            <div><p>Fundada em 2001, em Maputo – Moçambique, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p></div>
            </div>
           <div className={estilos.container_cards}>
            <Image src={loja} alt="Imagem da loja"/>
            <div className={estilos.card_conteudo}>
                <h4>Nossas Filiais</h4>
                <p>Hoje temos mais de 20 filiais por Moçambique e outros países da África</p>
            </div>
              <div className={estilos.card_conteudo}>
                <h4>Atendimento flexível</h4>
                <p>Nossa equipe possui é treinada para te atender</p>
            </div>
                <Image src={atendimento} alt="Imagem atendimento"/>
            </div>
           
        </section>
    )
}