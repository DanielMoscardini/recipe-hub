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

  return <button onClick={handleDeletar}>Deletar</button>;
};
