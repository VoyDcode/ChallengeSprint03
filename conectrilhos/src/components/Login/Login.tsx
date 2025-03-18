import Image from "next/image"
export default function cabecalho() {
    return(
        <form className="login-form">
        <div className="form-group">
        <Image src="/senha.png" alt="Logo da ccr" width={20} height= {20} />
        <label htmlFor="usuario" className="visually-hidden">Usuário</label>
        <input id="usuario"  type="text"  className="form-control"   placeholder="Usuário" required />
        </div>

        <div >
        <label htmlFor="senha" className="visually-hidden">Senha</label>
        <input id="senha" type="password" className="form-control" placeholder="Senha" required />
        </div>

        <button type="submit" className="submit-btn">Entrar</button>
    </form>
    )
}