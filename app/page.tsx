import { ReceitaCard } from "@/components/ReceitaCard";
import { getReceitas } from "@/lib/receitas";

const Home = async () => {
  const receitas = await getReceitas();

  return (
    <main>
      {receitas.map((r) => (
        <ReceitaCard key={r.id} receita={r} />
      ))}
    </main>
  );
};

export default Home;
