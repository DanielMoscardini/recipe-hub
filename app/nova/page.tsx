"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { criarReceita } from "@/lib/receitas";

const NovaReceitaPage = () => {
  const [nome, setNome] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");
  const [imagem, setImagem] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // sua missão a partir daqui:
    // 1. chame criarReceita, passando um objeto com nome, modo_preparo, imagem
    //    (lembre: os nomes dos campos precisam bater com o types.ts,
    //     que usa "modo_preparo" com underscore, não "modoPreparo")
    // 2. guarde o resultado (a receita criada, com o novo id)
    // 3. use router.push() pra redirecionar pra /${id da nova receita}
  };

  return (
    <div>
      <h1>Nova Receita</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome da receita"
        />
        <textarea
          value={modoPreparo}
          onChange={(e) => setModoPreparo(e.target.value)}
          placeholder="Modo de preparo"
        />
        <input
          type="text"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          placeholder="URL da imagem (opcional)"
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default NovaReceitaPage;
