import { BotaoDeletar } from "@/components/BotaoDeletar";
import { getReceitaPorId } from "@/lib/receitas";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const ReceitaPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const idNumero = Number(id);

  if (isNaN(idNumero)) {
    notFound();
  }

  const receita = await getReceitaPorId(idNumero);
  const imagemFinal = receita.imagem || "/sem-imagem.svg";

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-orange-500 hover:text-orange-400 text-sm mb-4 inline-block"
      >
        ← Voltar
      </Link>
      <Image
        alt={receita.nome}
        src={imagemFinal}
        width={600}
        height={300}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-zinc-100 mb-4">{receita.nome}</h1>
      <p className="text-zinc-300 whitespace-pre-line leading-relaxed mb-8">
        {receita.modo_preparo}
      </p>
      <div className="flex gap-3">
        <Link
          href={`/${receita.id}/editar`}
          className="bg-zinc-700 hover:bg-zinc-600 text-zinc-100 px-4 py-2 rounded-lg transition-colors"
        >
          Editar
        </Link>
        <BotaoDeletar id={receita.id} />
      </div>
    </main>
  );
};

export default ReceitaPage;
