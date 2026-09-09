"use client";

import { useState } from "react";
import { Receita } from "@/lib/types";
import { ReceitaCard } from "./ReceitaCard";

interface ListaReceitasComBuscaProps {
  receitas: Receita[];
}

export const ListaReceitasComBusca = ({
  receitas,
}: ListaReceitasComBuscaProps) => {
  const [termo, setTermo] = useState("");

  const receitasFiltradas = receitas.filter((r) =>
    r.nome.toLowerCase().includes(termo.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Buscar receita..."
        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500 mb-8"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {receitasFiltradas.map((r) => (
          <ReceitaCard key={r.id} receita={r} />
        ))}
      </div>
    </div>
  );
};
