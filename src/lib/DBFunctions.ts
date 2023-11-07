import { supabase } from "./DBClient";


// =================== **link Functions** ===================
export async function getLinks(){
    const { data: links } = await supabase
    .from("links")
    .select('*')
    return links
}
export async function addLink(link:link) {
    const { data } = await supabase
        .from('links')
        .insert([
            link,
        ])
        .select()
    return data
}
export async function deleteLink(id:number) {
    const { error } = await supabase
      .from('links')
      .delete()
      .eq('id', id)
}
export async function updateLink(link:link) {
    const { data, error } = await supabase
      .from('links')
      .update(link)
      .eq('id', link.id)
      .select()
    return data
}

export interface link{
    id?:number;
    link_name:string;
    link_url:string;
    category_id:number;
    created_at?:string;
}
// =================== **End link Functions** ===================

// =================== **Workspace Functions** ===================
export async function getWorkspaces(){
    const { data: workspaces } = await supabase
    .from("workspaces")
    .select('*')
    return workspaces
}

export async function addWorkspace(workspace:workspace) {
    const { data } = await supabase
        .from('workspaces')
        .insert([
            workspace,
        ])
        .select()
    return data
}
export async function deleteWorkspace(id:number) {
    const { error } = await supabase
      .from('workspaces')
      .delete()
      .eq('id', id)
}
export async function updateWorkspace(workspace:workspace) {
    const { data, error } = await supabase
      .from('workspaces')
      .update(workspace)
      .eq('id', workspace.id)
      .select()
    return data
}

export interface workspace{
    id?: number;
    workspace_name:string;
    created_at?:string;
}
// =================== **End Workspace Functions** ===================

// =================== **Category Functions** ===================

export async function getCategories(){
    const { data: categories } = await supabase
    .from("categories")
    .select('*')
    return categories
}

export async function addCategory(category:category) {
    const { data } = await supabase
        .from('categories')
        .insert([
            category,
        ])
        .select()
    return data
}
export async function deleteCategory(id:number) {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id)
      return error
}
export async function updateCategory(Category:category) {
    const { data, error } = await supabase
      .from('categories')
      .update(Category)
      .eq('id', Category.id)
      .select()
    return data
}
export interface category{
    id?: number;
    workspace_id:number;
    category_name:string;
    created_at?:string;
}

// =================== **End Category Functions** ===================

