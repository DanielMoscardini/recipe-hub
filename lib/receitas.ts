import { supabase } from "./supabase";
import { Receita, NovaReceita } from "./types";

export const getReceitas = async (): Promise<Receita[]> => {
  const { data, error } = await supabase.from("receitas").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getReceitaPorId = async (id: number): Promise<Receita> => {
  const { data, error } = await supabase
    .from("receitas")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const criarReceita = async (receita: NovaReceita): Promise<Receita> => {
  const { data, error } = await supabase
    .from("receitas")
    .insert(receita)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const editarReceita = async (
  id: number,
  receita: NovaReceita,
): Promise<Receita> => {
  const { data, error } = await supabase
    .from("receitas")
    .update(receita)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deletarReceita = async (id: number): Promise<void> => {
  const { error } = await supabase.from("receitas").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
};
