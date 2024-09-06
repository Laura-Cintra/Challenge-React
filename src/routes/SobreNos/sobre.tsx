import { Link } from "react-router-dom";
import { SobreNos as StyledSobreNos } from "../../styled";

import logoFigma from "../../assets/img/Logo-figma.png";
import fotoHenrique from "../../assets/img/fotoHenrique.jpg";
import fotoLaura from "../../assets/img/fotoLaura.jpg";
import fotoLarissa from "../../assets/img/fotoLarissa.jpg";
import logoGithub from "../../assets/img/Logo-github.png";


export default function SobreNos() {
    return (
        <StyledSobreNos>
            <h2>Turma: 1TDSPK</h2>
            
            <Link 
                target="_blank" 
                rel="noopener noreferrer" 
                to="https://www.figma.com/file/whwMURtqIou1eqtucrqUzr/Prot%C3%B3tipo-Challenge?type=design&node-id=0%3A1&mode=design&t=iYevczBRwwXpuFpr-1"
            >
                <img 
                    className="logo-figma" 
                    src={logoFigma} 
                    alt="Logo do Figma" 
                />
            </Link>
            
            <Link 
                target="_blank" 
                rel="noopener noreferrer" 
                to="https://github.com/Laura-Cintra/Challenge-Front-End"
            >
                <h3>Repositório Github</h3>
            </Link>
            
            <main>
                <section>
                    <img 
                        src={fotoHenrique}
                        alt="Foto de Henrique Garcia" 
                    />
                    <h3>Henrique Garcia</h3>
                    <h4>RM - 558062</h4>
                    <p>Função</p>
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        to="https://github.com/HenriqueDML"
                    >
                        <img 
                            src={logoGithub}
                            alt="Logo do Github" 
                        />
                    </Link>
                </section>
                
                <section>
                    <img 
                        src={fotoLarissa}
                        alt="Foto de Larissa Muniz" 
                    />
                    <h3>Larissa Muniz</h3>
                    <h4>RM - 557197</h4>
                    <p>Função</p>
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        to="https://github.com/larissa557197"
                    >
                        <img 
                            src={logoGithub}
                            alt="Logo do Github" 
                        />
                    </Link>
                </section>
                
                <section>
                    <img 
                        src={fotoLaura}
                        alt="Foto de Laura Cintra" 
                    />
                    <h3>Laura Cintra</h3>
                    <h4>RM - 558843</h4>
                    <p>Função</p>
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        to="https://github.com/Laura-Cintra"
                    >
                        <img 
                            src={logoGithub}
                            alt="Logo do Github" 
                        />
                    </Link>
                </section>
            </main>        
        </StyledSobreNos>
    );
}