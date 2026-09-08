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
    </div>
  );
};

export default ReceitaPage;
