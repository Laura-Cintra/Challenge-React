import { Motivo } from '../styled';
import disponibilidade from "../assets/img/disponibilidade.jpg";
import resposta from "../assets/img/resposta-rapida.png";
import facilidade from "../assets/img/facilidade-uso.jpg";

export default function MotivosUso() {
    return (
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
    );
}