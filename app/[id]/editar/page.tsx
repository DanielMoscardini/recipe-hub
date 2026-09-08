import { getReceitaPorId } from "@/lib/receitas";
import { notFound } from "next/navigation";
import { FormularioReceita } from "@/components/FormularioReceita";

const EditarReceitaPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const idNumero = Number(id);

  if (isNaN(idNumero)) {
    notFound();
  }

  const receita = await getReceitaPorId(idNumero);

  return (
    <div>
      <h1>Editar Receita</h1>
      <FormularioReceita receitaInicial={receita} />
    </div>
  );
};

export default EditarReceitaPage;
