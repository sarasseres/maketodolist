'use client';

import { Header } from './Header';
import { Input } from './Input';
import { NoteCard } from './NoteCard';
import { createContext, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable } from '@/helpers/StricModeDroppable';

export const NoteDataContext = createContext();

export const NoteEditor = ({ NotedData }) => {
  // const [notes, setNotes] = useState([]);
  // const [notes, setNotes] = useState(NotedData);
  const [notes, setNotes] = useState(NotedData);

  // const handleDragEnd = (result) => {
  //   if (!result.destination) return; // Dropped outside the list

  //   const reorderedNotes = Array.from(notes);
  //   console.log();
  //   const [reorderedNote] = reorderedNotes.splice(result.source.index, 1);

  //   reorderedNotes.splice(result.destination.index, 0, reorderedNote);

  //   setNotes(reorderedNotes);
  // };
  return (
    <NoteDataContext.Provider value={{}}>
      <div className="wrapper">
        <Header />
        <Input />

        <section className="grid grid-cols-2 gap-6 ">
          {NotedData.map(({ content, id }, index) => {
            return <NoteCard key={id} id={id} content={content} index={index} />;
          })}
        </section>
      </div>
    </NoteDataContext.Provider>
  );
};
