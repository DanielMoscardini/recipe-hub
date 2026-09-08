"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { criarReceita, editarReceita } from "@/lib/receitas";
import { Receita } from "@/lib/types";

interface FormularioReceitaProps {
  receitaInicial?: Receita; // "?" = opcional. Se não vier, é modo "criar"
}

export const FormularioReceita = ({
  receitaInicial,
}: FormularioReceitaProps) => {
  const [nome, setNome] = useState(receitaInicial?.nome ?? "");
  const [modoPreparo, setModoPreparo] = useState(
    receitaInicial?.modo_preparo ?? "",
  );
  const [imagem, setImagem] = useState(receitaInicial?.imagem ?? "");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dadosReceita = {
      nome,
      modo_preparo: modoPreparo,
      imagem,
    };

    if (receitaInicial) {
      await editarReceita(receitaInicial.id, dadosReceita);
      router.push(`/${receitaInicial.id}`);
    } else {
      const receitaCriada = await criarReceita(dadosReceita);
      router.push(`/${receitaCriada.id}`);
    }
  };

  return (
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
      <button type="submit">{receitaInicial ? "Salvar" : "Criar"}</button>
    </form>
  );
};
