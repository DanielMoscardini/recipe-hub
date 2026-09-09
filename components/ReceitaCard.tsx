import { Receita } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

interface ReceitaCardProps {
  receita: Receita;
}

export const ReceitaCard = ({ receita }: ReceitaCardProps) => {
  const imagemFinal = receita.imagem || "/sem-imagem.svg";
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-orange-500 transition-colors">
      <Link href={`/${receita.id}`}>
        <Image
          alt={receita.nome}
          src={imagemFinal}
          height={200}
          width={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-zinc-100">
            {receita.nome}
          </h3>
        </div>
      </Link>
    </div>
  );
};
