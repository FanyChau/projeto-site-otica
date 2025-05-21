import capa from '../../../public/capa.png';
import estilos from "./SecaoCapa.module.css";


export default function SecaoCapa(){
    return(

        <section className={estilos.secao_capa} style={{ backgroundImage: `url(${capa.src})`,
        display: 'flex',
        alignItems: 'center',
        /*height: '90vh',*/
        backgroundSize: 'cover',
        /*backgroundPosition: 'center'*/
        }}>
            <div className={estilos.container_texto_capa}>
                <p>Preços baixos em</p>
                <h1>Óculos de grau e de sol</h1>
                <p>Você só encontra aqui</p>
            </div>
        </section>
    )
}