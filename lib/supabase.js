import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function getText(id)
 {
  const { data } = await supabase
    .from("cms_content")
    .select("content")
    .eq("id", id)
    .single();

  return data?.content || "";
}
