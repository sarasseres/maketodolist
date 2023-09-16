'use client';

import { NoteDataContext } from './NoteEditor';
import { ClipboardEdit, Trash2, CheckCircle } from 'lucide-react';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Draggable } from 'react-beautiful-dnd';

export const NoteCard = ({ index, content, id }) => {
  const router = useRouter();
  const [newContent, setNewContent] = useState(content);
  const { deleteNotes, updateNotes } = useContext(NoteDataContext);
  const [editMode, setEditMode] = useState(false);

  async function handleDeleteNote() {
    await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`, {
      method: 'DELETE',
    });

    router.refresh();
  }

  async function handleUpdateNote() {
    const res = await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newContent }),
    });
    const data = await res.json();
    setEditMode(false);

    router.refresh();
    return data;
  }
  return (
    <div className="bg-transparent border border-slate-400 shadow text-white p-2 rounded-xl flex justify-between">
      {editMode ? <textarea className="w-full bg-transparent    focus:outline-none" value={newContent || content} onChange={(e) => setNewContent(e.target.value)} /> : <div className="min-h-[50px]">{content}</div>}

      <div className="space-x-2 flex ">
        {editMode ? (
          <button className="btnUpdate" onClick={handleUpdateNote}>
            <CheckCircle />
          </button>
        ) : (
          <button className="btnEdit" onClick={() => setEditMode(true)}>
            <ClipboardEdit />
          </button>
        )}

        <button className="btnDelete" onClick={handleDeleteNote}>
          <Trash2 />
        </button>
      </div>
    </div>
  );
};
