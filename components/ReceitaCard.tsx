import { Receita } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

interface ReceitaCardProps {
  receita: Receita;
}

export const ReceitaCard = ({ receita }: ReceitaCardProps) => {
  return (
    <div>
      <Link href={`/${receita.id}`}>
        <div>
          <h3>{receita.nome}</h3>
          {/* <Image
            alt={receita.nome}
            src={receita.imagem}
            height={200}
            width={200}
          /> */}
        </div>
      </Link>
    </div>
  );
};
