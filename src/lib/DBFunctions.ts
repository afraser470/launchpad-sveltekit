import { supabase } from "./DBClient";

export async function getData(){
    const data = await supabase
    .from("countries")
    .select();
    return data
}
