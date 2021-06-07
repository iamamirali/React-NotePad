import { useGlobalContext } from "./context";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

// ## add edit btn and create it's logic ##

const SingleNote = () => {
  const { notes } = useGlobalContext();
  const [content, setContent] = useState({ title: "", body: "" });
  const [editClicked, setEditClicked] = useState(false);
  const { id } = useParams();

  let target = notes.find((note) => {
    return note.id == parseInt(id);
  });

  useEffect(() => {
    setContent({ title: target.title, body: target.content });
  }, []);

  const editor = () => {
    setEditClicked(true);
  };

  const save = () => {
    setEditClicked(false);
    target.title = content.title;
    target.content = content.body;
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContent({ ...content, [name]: value });
  };

  return (
    <section className="singleNoteContainer">
      <Link className="backLink" to="/">
        <button className="backBtn">Back to List</button>
      </Link>

      <button className="editBtn" onClick={editor}>
        Edit
      </button>

      {editClicked ? (
        <article className="notePage">
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
            value={content.title}
          />

          <textarea
            name="body"
            className="noteContent"
            id=""
            cols="30"
            rows="15"
            onChange={handleChange}
            value={content.body}
          ></textarea>
        </article>
      ) : (
        <article className="notePage">
          <h1 className="notePageTitle">{content.title}</h1>
          <p className="notePageContent">{content.body}</p>
        </article>
      )}

      {editClicked && (
        <button type="submit" onClick={save} className="editSubmitBtn">
          Save
        </button>
      )}
    </section>
  );
};
export default SingleNote;
