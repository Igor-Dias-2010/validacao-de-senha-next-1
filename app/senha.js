"use client"

import { useState } from "react"

export default function Senha() {
    const [senha, setSenha] = useState("")
    const [confirmeSenha, setConfirmeSenha] = useState("")
    function validar() {
        if (senha === "" || confirmeSenha === "") {
            alert("Por favor, preencha ambos os campos.")
            return
        }

        if (senha === confirmeSenha) {
            alert("As senhas coincidem ✅")
        } else {
            alert("As senhas não coincidem ❌")
        }

        setSenha("")
        setConfirmeSenha("")
    }
    return (
        <div class="container">
            <h1>Validador de senhas</h1>
            <input type="password" placeholder="Digite a senha" id="senha" onChange={(e) => setSenha(e.target.value)} value={senha} onKeyDown={(e) => {
                if (e.key === "Enter") {
                    validar()
                }
            }} />
            <input type="password" placeholder="Confirme a senha" id="confirmeSenha" onChange={(e) => setConfirmeSenha(e.target.value)} value={confirmeSenha} onKeyDown={(e) => {
                if (e.key === "Enter") {
                    validar()
                }
            }} />
            <button onClick={validar}>Validar</button>
        </div>
    )
}