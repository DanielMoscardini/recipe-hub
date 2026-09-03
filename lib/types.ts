export interface Receita {
  id: number;
  nome: string;
  modo_preparo: string;
  imagem: string | null;
  created_at: string;
}

export type NovaReceita = Omit<Receita, "id" | "created_at">;
