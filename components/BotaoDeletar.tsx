"use client";

import { useRouter } from "next/navigation";
import { deletarReceita } from "@/lib/receitas";

interface BotaoDeletarProps {
  id: number;
}

export const BotaoDeletar = ({ id }: BotaoDeletarProps) => {
  const router = useRouter();

  const handleDeletar = async () => {
    await deletarReceita(id);
    router.push("/");
  };

  return (
    <button
      onClick={handleDeletar}
      className="bg-red-900 hover:bg-red-800 text-red-100 px-4 py-2 rounded-lg transition-colors"
    >
      Deletar
    </button>
  );
};
