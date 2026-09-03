import { getReceitas } from "@/lib/receitas";

const Home = async () => {
  const receitas = await getReceitas();

  return (
    <main>
      <ul>
        {receitas.map((r) => (
          <li key={r.id}>{r.nome}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
