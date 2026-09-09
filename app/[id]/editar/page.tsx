import { getReceitaPorId } from "@/lib/receitas";
import { notFound } from "next/navigation";
import { FormularioReceita } from "@/components/FormularioReceita";
import Link from "next/link";

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
    <div className="max-w-2xl mx-auto px-4 pt-8">
      <Link
        href={`/${receita.id}`}
        className="text-orange-500 hover:text-orange-400 text-sm mb-4 inline-block"
      >
        ← Voltar
      </Link>
      <h1 className="text-3xl font-bold text-zinc-100">Editar Receita</h1>
      <FormularioReceita receitaInicial={receita} />
    </div>
  );
};

export default EditarReceitaPage;
