import React, { useContext, useEffect, useState } from "react";

const NoteContext = React.createContext();

const save = () => {
  const list = localStorage.getItem("item");
  if (list) {
    return JSON.parse(localStorage.getItem("item"));
  } else {
    return [];
  }
};

export const Context = ({ children }) => {
  const [addClicked, setAddClicked] = useState(false);

  const [plus, setPlus] = useState(true);

  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
    id: 0,
  });

  const [notes, setNotes] = useState(save());

  const [isError, setIsError] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(notes));
  }, [notes]);

  return (
    <NoteContext.Provider
      value={{
        plus,
        setPlus,
        isError,
        setIsError,
        error,
        setError,
        noteContent,
        setNoteContent,
        notes,
        setNotes,
        addClicked,
        setAddClicked,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(NoteContext);
};
