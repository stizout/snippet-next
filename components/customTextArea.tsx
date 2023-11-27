'use client';
import React, { useState } from 'react';
import { editSnippet } from '@/actions';

interface SnippetProps {
  snippet: {
    id: number;
    code: string;
    title: string;
  };
}

export default function CustomTextArea({ snippet }: SnippetProps) {
  const [code, setCode] = useState(snippet.code);
  const editSnippetAction = editSnippet.bind(null, +snippet.id, code);

  return (
    <div>
      <textarea onChange={(e) => setCode(e.target.value)} value={code} className="border-solid border-sky-500" />
      <form action={editSnippetAction}>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
