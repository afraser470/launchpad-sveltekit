import { getData } from "$lib"

export async function load() {
  const { data } = await getData()
  return {
    countries: data ?? [],
  };
}