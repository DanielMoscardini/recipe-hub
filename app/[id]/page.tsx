import { BotaoDeletar } from "@/components/BotaoDeletar";
import { getReceitaPorId } from "@/lib/receitas";
import { notFound } from "next/navigation";

const ReceitaPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const idNumero = Number(id);

  if (isNaN(idNumero)) {
    notFound();
  }

  const receita = await getReceitaPorId(idNumero);

  return (
    <div>
      <p>{receita.nome}</p>
      <p>{receita.modo_preparo}</p>
      <BotaoDeletar id={receita.id} />
    </div>
  );
};

export default ReceitaPage;
