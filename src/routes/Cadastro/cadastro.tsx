import { Link } from "react-router-dom";
import { MainCont } from "../../styled";

export default function Cadastro() {
    return (
        <MainCont>

            <form action="cadastro" method="get">
                <fieldset>
                    <h1>Cadastrar Conta</h1>

                    <label htmlFor="idnome">Nome </label><br />
                    <input
                        type="text"
                        required
                        name="nome"
                        id="idnome"
                        placeholder="Digite seu nome completo"
                    /><br />

                    <label htmlFor="idcpf">CPF </label><br />
                    <input
                        type="text"
                        name="cpf"
                        id="idcpf"
                        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                        placeholder="Digite seu CPF"
                    /><br />

                    <label htmlFor="idemail">E-mail </label><br />
                    <input
                        type="email"
                        name="email"
                        id="idemail"
                        placeholder="Digite seu email"
                    /><br />

                    <label htmlFor="idsenha">Senha </label><br />
                    <input
                        type="password"
                        name="senha"
                        id="idsenha"
                        maxLength={12}
                        placeholder="Digite sua senha"
                    /><br />

                    <label htmlFor="idconfirmasenha">Confirmar Senha </label><br />
                    <input
                        type="password"
                        name="confirmasenha"
                        id="idconfirmasenha"
                        maxLength={12}
                        placeholder="Digite sua senha novamente"
                    /><br />

                    <input type="submit" value="Cadastrar" />
                    <input type="reset" value="Limpar" />

                    <p>Já possui uma conta cadastrada?</p>
                    <Link to="/login">
                    <p>Entrar em conta existente</p>
                    </Link>
                </fieldset>
            </form>
        </MainCont>

    );
}
