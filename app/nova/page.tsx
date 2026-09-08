"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { criarReceita } from "@/lib/receitas";
import { NovaReceita } from "@/lib/types";

const NovaReceitaPage = () => {
  const [nome, setNome] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");
  const [imagem, setImagem] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const novaReceita: NovaReceita = {
      nome,
      modo_preparo: modoPreparo,
      imagem: imagem,
    };

    const receitaCriada = await criarReceita(novaReceita);

    router.push(`/${receitaCriada.id}`);
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
