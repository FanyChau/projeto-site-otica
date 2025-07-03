import Image from 'next/image';
import local from '../../../public/local.png';
import facebook from '../../../public/fb.png';
import instagram from '../../../public/ig.png';
import telefone from '../../../public/telefone.png';
import twitter from '../../../public/tt.png';
import email from '../../../public/email.png';
import estilos from "./SecaoContatos.module.css";
import { useState, useEffect } from "react";

export default function SecaoContatos() {
   const [tituloContato, setTituloContato] = useState("Contato");

    useEffect(() => {
        const media = window.matchMedia("(max-width: 1440px)");
        const updateTitle = () => {
            setTituloContato(media.matches ? "Nossos Contatos" : "Contato");
        };
        updateTitle();
        media.addEventListener("change", updateTitle);
        return () => media.removeEventListener("change", updateTitle);
    }, []);

    return(
        <section id="contato" className={estilos.secao_contatos}>
            <div className={estilos.titulo_contatos}> 
            <h3>Fale conosco</h3>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
           </div>  
            <div className={estilos.container_contatos}>
            <div className={estilos.card_contatos}>
                <div>
                  <h3>{tituloContato}</h3>
                </div>
                <div>
                  <Image src={local} alt="Imagem localização"/> 
                  <span>Bairro Central, MP</span>
                </div>
                <div>
                  <Image src={telefone} alt="Imagem telefone"/>
                  <span>(+258) 84 123 4567</span>
                </div>
                <div>
                  <Image src={email} alt="Imagem email"/>
                  <span>contato@oticavida.com</span>
                </div>
            </div>
             <div className={estilos.card_contatos}>
                <div>
                  <h3>Nossas Redes Sociais</h3>
                </div>
                 <div>
                  <Image src={facebook} alt="Imagem facebook"/>
                  <span>/OticaVida</span>
                </div>
                <div>
                  <Image src={instagram} alt="Imagem instagram"/>
                  <span>@oticavidarj</span>
                </div>
                <div>
                  <Image src={twitter} alt="Imagem twitter"/>
                  <span>@oticavidarj</span>    
                </div>
                
            </div>
            </div>
        </section>
    )
}