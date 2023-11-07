import { getCategories, getWorkspaces, getLinks } from "$lib";

export async function load() {
  const workspaces = await getWorkspaces()
  const categories = await getCategories()
  const links = await getLinks()
  return {
    workspaces,
    categories,
    links
  };
}