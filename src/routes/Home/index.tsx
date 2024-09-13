import Apresentacao from '../../components/Apresentacao.tsx';
import Recepcao from '../../components/Recepcao.tsx';
import MotivosUso from '../../components/MotivosUso.tsx';
import Faq from '../../components/Faq.tsx';

export default function Home() {
    return (
        <>
            <Apresentacao />
            <Recepcao />
            <MotivosUso />
            <Faq />       
        </>
    );
}