import { DivApresentacao } from '../styled';
import vetor from "../assets/img/vetor.png";

export default function Apresentacao() {
    return (
        <DivApresentacao>
            <section className="texto_apresentacao">
                <h2 id="titulo" className="mostrar">Auto Atendimento</h2>
                {/* <img id="logoprincipal" className="esconder" src="img/Logo-home.png" alt="logo" /> */}
                <div className="h2 esconder">
                    <h2 className="esconder">Auto Atendimento</h2>
                </div>
                <h3 className="esconder">Qualidade e <br />Rapidez</h3>
                <hr className="esconder" />
                <p className="esconder">Nosso objetivo é fornecer soluções rápidas e eficazes para o seu veículo.</p>
                <a className="esconder" href="#bem-vindo">Saiba Mais</a>
                <hr className="esconder" id="espacinho" />
            </section>
            <section className="banner">
                <img src={vetor} alt="homem fazendo manutenção de carro - imagem ilustrativa" />
            </section>
            <section className="omg">
                <h3 className="mostrar">Qualidade e <br />Rapidez</h3>
                <hr className="mostrar" />
                <p className="mostrar">Nosso objetivo é fornecer soluções rápidas e eficazes para o seu veículo.</p>
                <a className="mostrar" id="botaoSaibaMais" href="#bem-vindo">Saiba Mais</a>
            </section>
        </DivApresentacao>
    );
}