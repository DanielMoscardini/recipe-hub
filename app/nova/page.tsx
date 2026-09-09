import { FormularioReceita } from "@/components/FormularioReceita";
import Link from "next/link";

const NovaReceitaPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-8">
      <Link
        href="/"
        className="text-orange-500 hover:text-orange-400 text-sm mb-4 inline-block"
      >
        ← Voltar
      </Link>
      <h1 className="text-3xl font-bold text-zinc-100">Nova Receita</h1>
      <FormularioReceita />
    </div>
  );
};

export default NovaReceitaPage;
