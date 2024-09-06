import { Apresentacao, BemVindo, Faq, Motivo } from '../../styled';

import vetor from "../../assets/img/vetor.png"
import automacao from "../../assets/img/automacao.png"
import disponibilidade from "../../assets/img/disponibilidade.jpg"
import resposta from "../../assets/img/resposta-rapida.png"
import facilidade from "../../assets/img/facilidade-uso.jpg"
import expand_more from "../../assets/img/expand_more.png"
import { Link } from 'react-router-dom';



export default function Home() {
    return (
        <>
            <Apresentacao className="container">
                <section className="texto_apresentacao">
                    <h2 id="titulo" className="mostrar">Auto Atendimento</h2>
                    <img id="logoprincipal" className="esconder" src="img/Logo-home.png" alt="logo" />
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
            </Apresentacao>

            <BemVindo id="bem-vindo" className="container2">
                <section className="titulo_bemvindo">
                    <h2>Bem vindo(a) ao <span>ChatCar</span>!</h2>
                </section>
                <section className="subtitulo_bemvindo">
                    <h3>O melhor serviço de diagnóstico por IA</h3>
                </section>
                <section className="conteudo_descricao">
                    <h4>Somos a solução para acelerar o processo de manutenção do seu carro!</h4>
                    <p>Com o ChatDiagnosticCar, você pode diagnosticar problemas, agendar revisões, solicitar orçamentos de peças e muito mais, tudo de forma rápida e fácil. Nossa inteligência artificial está pronta para oferecer suporte 24 horas por dia, 7 dias por semana. Temos atendimento personalizado, em que nossa inteligência artificial aprende com cada interação, oferecendo um serviço cada vez mais personalizado. Com base nas suas preferências, histórico de diagnósticos e problemas automotivos, o ChatDiagnosticCar fornece recomendações e soluções adaptadas às suas necessidades específicas. Isso garante que você receba o atendimento mais eficiente e relevante possível.</p>
                    <div className="center">
                        <Link  rel="noopener noreferrer" to="/chatbot">Usar Ferramenta</Link>
                    </div>
                </section>
                <section className="img_apresentacao">
                    <img id="img_apre" src={automacao} alt="imagem" />
                </section>
            </BemVindo>

            <Motivo className="container3">
                <section className="titulo_motivo">
                    <h2>Por que usar o ChatCar?</h2>
                </section>
                <section className="conteudo_motivo1">
                    <img src={disponibilidade} alt="imagem exemplo" />
                    <h3>Disponibilidade</h3>
                    <p>Nosso assistente virtual está sempre disponível, pronto para ajudar a qualquer hora do dia ou da noite.</p>
                </section>
                <section className="conteudo_motivo2">
                    <img src={resposta} alt="imagem exemplo 2" />
                    <h3>Resposta rápida</h3>
                    <p>Obtenha diagnósticos e soluções imediatas para os problemas do seu veículo.</p>
                </section>
                <section className="conteudo_motivo3">
                    <img src={facilidade} alt="imagem exemplo 3" />
                    <h3>Facilidade de Uso</h3>
                    <p>Nosso sistema é intuitivo e fácil de usar, garantindo uma experiência agradável para todos os usuários.</p>
                </section>
            </Motivo>

            <Faq id="duvidas" className="faq">
                <section className="conteudoFAQ">
                    <h2>Dúvidas Frequentes</h2>
                    <section>
                        <div className="duvidaFAQ">
                            <h3>Dúvida 1</h3>
                            <img src={expand_more} alt="seta para cima" />
                        </div>
                        <p>Você pode agendar uma revisão facilmente através do nosso assistente virtual. Basta informar o tipo de serviço que você precisa e escolher um horário conveniente.</p>
                    </section>
                    <section>
                        <div className="duvidaFAQ">
                            <h3>Dúvida 2</h3>
                            <img src={expand_more} alt="seta para cima" />
                        </div>
                    </section>
                    <section>
                        <div className="duvidaFAQ">
                            <h3>Dúvida 3</h3>
                            <img src={expand_more} alt="seta para cima" />
                        </div>
                    </section>
                    <section>
                        <div className="duvidaFAQ">
                            <h3>Dúvida 4</h3>
                            <img src={expand_more} alt="seta para cima" />
                        </div>
                    </section>
                </section>
            </Faq>        
        </>
    );
}
