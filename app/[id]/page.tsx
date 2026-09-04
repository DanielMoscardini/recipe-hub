import { getReceitaPorId } from "@/lib/receitas";

const ReceitaPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const receita = await getReceitaPorId(Number(id));

  return (
    <div>
      <p>{receita.nome}</p>
      <p>{receita.modo_preparo}</p>
    </div>
  );
};

export default ReceitaPage;
