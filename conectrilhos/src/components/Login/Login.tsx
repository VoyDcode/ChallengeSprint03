import Image from "next/image"
export default function cabecalho() {
    return(
        <form className="login-form">
            <div className="form-group relative">
                <label htmlFor="usuario" className="visually-hidden">Usuário</label>
                <Image src="/user.png" alt="Logo da ccr" width={25} height= {25} className="absolute left-2 top-12 transform -translate-y-1/2"/>
            <input id="usuario"  type="text"  className="form-control"   placeholder="Usuário" required/>
        </div>

        <div className="form-group relative">
            <label htmlFor="senha" className="visually-hidden">Senha</label>
                <Image src="/senha.png" alt="Logo da ccr" width={25} height= {25} className="absolute left-2 top-12 transform -translate-y-1/2"/>
            <input id="senha" type="password" className="form-control" placeholder="Senha" required />
        </div>

        <button type="submit" className="submit-btn">Entrar</button>
    </form>
    )
}