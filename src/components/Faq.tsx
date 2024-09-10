import { MainFaq } from '../styled';
import expand_more from "../assets/img/expand_more.png";

export default function Faq() {
    return (
        <MainFaq id="duvidas" className="faq">
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
        </MainFaq>
    );
}