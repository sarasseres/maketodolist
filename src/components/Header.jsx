'use client';
import { useContext } from 'react';
import { NoteDataContext } from './NoteEditor';

export const Header = () => {
  const { addNotes } = useContext(NoteDataContext);
  return (
    <div className="flex justify-center">
      <div className="font-bold tracking-tight text-2xl text-white">Todo-List</div>
    </div>
  );
};
