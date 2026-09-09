import { FormularioReceita } from "@/components/FormularioReceita";

const NovaReceitaPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-100 max-w-2xl mx-auto px-4 pt-8">
        Nova Receita
      </h1>
      <FormularioReceita />
    </div>
  );
};

export default NovaReceitaPage;
