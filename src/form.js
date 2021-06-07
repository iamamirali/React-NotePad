import { useGlobalContext } from "./context";
import Modal from "./modal";

// ## create a modal for empty title error ##

function Form() {
  const {
    setAddClicked,
    noteContent,
    setNoteContent,
    notes,
    setNotes,
    isError,
    setIsError,
    setPlus,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNoteContent({
      ...noteContent,
      [name]: value,
      id: new Date().getTime().toString(),
    });
  };

  const noteAdder = () => {
    if (noteContent.title) {
      setNotes([...notes, noteContent]);
      setAddClicked(false);
      setPlus(true);
      setNoteContent({});
    } else {
      setAddClicked(true);
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="titlePart">
        <label className="noteTitle" htmlFor="title">
          Title
        </label>
        <br />
        <input
          id="title"
          type="text"
          className="noteInput"
          name="title"
          onChange={handleChange}
          value={noteContent.title}
        />
      </div>

      <div className="contentPart">
        <textarea
          name="content"
          className="noteContent"
          id=""
          cols="30"
          rows="15"
          onChange={handleChange}
          value={noteContent.content}
        ></textarea>
      </div>

      {isError && <Modal />}

      <button className="submitBtn" type="submit" onClick={noteAdder}>
        Save
      </button>
    </form>
  );
}

export default Form;
