"use client";

import { useState, useEffect } from "react";

type EditableFieldProps = {
  id: number;
  field: string;
  defaultValue: string | number | null;
};

export default function EditableField({ id, field, defaultValue }: EditableFieldProps) {
  const [value, setValue] = useState<string>(String(defaultValue ?? ""));
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const admin = localStorage.getItem("admin") === "true";
    setIsAdmin(admin);
  }, []);

  async function saveToDatabase(newValue: string) {
    if (!newValue) return; // zabezpieczenie przed pustym body

    await fetch("/api/pages", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        field,
        value: newValue,
      }),
    });
  }

  return (
    <span
      contentEditable={isAdmin}
      suppressContentEditableWarning={true}
      onBlur={(e) => {
        const newText = e.currentTarget.innerText?.trim() ?? "";
        if (!newText) return; // zabezpieczenie
        setValue(newText);
        saveToDatabase(newText);
      }}
      style={isAdmin ? { borderBottom: "1px dashed red" } : {}}
    >
      {value}
    </span>
  );
}
