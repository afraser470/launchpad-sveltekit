import { supabase } from "./DBClient";


// =================== **link Functions** ===================
export async function getLinks(){
    const { data: links } = await supabase
    .from("links")
    .select('*')
    return links
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
export interface workspace{
    id: number;
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

export interface category{
    id: number;
    workspace_id:number;
    category_name:string;
    created_at?:string;
}

// =================== **End Category Functions** ===================

