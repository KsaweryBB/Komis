"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

type EditableTextProps = {
  id: string;
  defaultText: string;
};

export default function EditableText({ id, defaultText }: EditableTextProps) {
  const [text, setText] = useState<string>(defaultText);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const admin = localStorage.getItem("admin") === "true";
    setIsAdmin(admin);
  }, []);

  async function saveToSupabase(newText: string) {
    await supabase.from("cms_content").upsert({ id, content: newText });
  }

  return (
    <span
      contentEditable={isAdmin}
      suppressContentEditableWarning={true}
      onBlur={(e) => {
        const newText = e.currentTarget.innerText;
        setText(newText);
        saveToSupabase(newText);
      }}
      style={isAdmin ? { borderBottom: "1px dashed red" } : {}}
    >
      {text}
    </span>
  );
}
