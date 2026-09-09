import { ReceitaCard } from "@/components/ReceitaCard";
import { getReceitas } from "@/lib/receitas";

const Home = async () => {
  const receitas = await getReceitas();

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-zinc-100">Recipe Hub</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {receitas.map((r) => (
          <ReceitaCard key={r.id} receita={r} />
        ))}
      </div>
    </main>
  );
};

export default Home;
