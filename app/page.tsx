import { ListaReceitasComBusca } from "@/components/ListaReceitasComBusca";
import { ReceitaCard } from "@/components/ReceitaCard";
import { getReceitas } from "@/lib/receitas";
import Link from "next/link";

const Home = async () => {
  const receitas = await getReceitas();

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-zinc-100">Recipe Hub</h1>
        <Link
          href="/nova"
          className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          + Nova Receita
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ListaReceitasComBusca receitas={receitas} />
      </div>
    </main>
  );
};

export default Home;
