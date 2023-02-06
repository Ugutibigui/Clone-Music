import './ModalLogin.css'
import './Modal'

function ModalLogin() {
    return (
        <div className="opacity-body">
            <section>
                <div className="text-click">
                    <span>Fazer login</span>
                    <p>Ainda não possui uma conta Deezer? <strong>CADASTRE-SE</strong></p>
                </div>

                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email'/>

                    <label htmlFor="password">Senha:</label>
                    <input type="password" id='password'/>

                    <button>FAZER LOGIN</button>
                </form>

                <div className="text-click">
                    <p id='forget'>ESQUECEU SUA SENHA?</p>
                </div>
            </section>
        </div>
    )
}
export default ModalLogin