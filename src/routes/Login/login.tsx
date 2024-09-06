import { MainCont } from "../../styled";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <MainCont>
            <form action="login" method="get">
                <fieldset>
                    <h1>Acessar Conta</h1>
                    
                    <label htmlFor="idemail">E-mail</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        id="idemail"
                        placeholder="Digite seu email"
                        required
                    />
                    <br />

                    <label htmlFor="idsenha">Senha</label>
                    <br />
                    <input
                        type="password"
                        name="senha"
                        id="idsenha"
                        placeholder="Digite sua senha"
                        maxLength={6}
                        required
                    />
                    <br />

                    <input type="submit" value="Entrar" />
                    <input type="reset" value="Limpar" />

                    <p>Ainda não tem uma conta?</p>
                    <Link to="/cadastro">
                        Cadastre-se agora!
                    </Link>
                </fieldset>
            </form>
        </MainCont>
    );
}