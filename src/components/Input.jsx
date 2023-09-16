'use client';

import { Search, Send } from 'lucide-react';
import { useContext, useState, useEffect } from 'react';
import { NoteDataContext } from './NoteEditor';
import { useRouter } from 'next/navigation';

export const Input = () => {
  const router = useRouter();
  const [content, setContent] = useState('');
  //   const createNote = useContext(NoteDataContext);

  //   const handleCreateNote = async () => {
  //     const res = await createNote();
  //     console.log(res);
  //   };

  async function handleCreateNote() {
    const res = await fetch('https://devscale-mockapi.fly.dev/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: content, user: 'saras@gmail.com' }),
    });
    const data = await res.json();
    // console.log(data, 'wew');
    setContent('');
    router.refresh();
  }

  return (
    <div className="flex items-center justify-center space-x-3">
      <div className=" relative flex items-center w-1/2  ">
        <input placeholder="Enter a Todo .." className="bg-slate-900 text-white" onChange={(e) => setContent(e.target.value)} />
      </div>

      <button className="bg-lightBrown p-3 text-slate-800 shadow rounded-lg" onClick={handleCreateNote}>
        <Send />
      </button>
    </div>
  );
};
