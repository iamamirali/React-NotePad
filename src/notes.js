import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Notes = () => {
  const { notes, setNotes } = useGlobalContext();

  const removeBtn = (note) => {
    setNotes(
      notes.filter((item) => {
        if (item.id !== note.id) {
          return item;
        }
      })
    );
  };

  return (
    <div className="notes">
      {notes.map((note) => {
        return (
          <div key={note.id} className="noteItem">
            <h3 className="notesTitle">{note.title}</h3>
            <p className="notesContent">{`${note.content.substr(0, 50)}...`}</p>
            <button className="removeBtn" onClick={() => removeBtn(note)}>
              Remove
            </button>
            <Link className="link" to={`/singleNote/${note.id}`}>
              <button className="showBtn">Show</button>
            </Link>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
