"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { criarReceita, editarReceita } from "@/lib/receitas";
import { Receita } from "@/lib/types";

interface FormularioReceitaProps {
  receitaInicial?: Receita;
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
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-4"
    >
      <div>
        <label className="block text-sm text-zinc-400 mb-1">
          Nome da receita
        </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome da receita"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">
          Modo de preparo
        </label>
        <textarea
          value={modoPreparo}
          onChange={(e) => setModoPreparo(e.target.value)}
          placeholder="Modo de preparo"
          rows={6}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">
          URL da imagem (opcional)
        </label>
        <input
          type="text"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          placeholder="URL da imagem (opcional)"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500"
        />
      </div>
      <button
        type="submit"
        className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors mt-2"
      >
        {receitaInicial ? "Salvar" : "Criar"}
      </button>
    </form>
  );
};
