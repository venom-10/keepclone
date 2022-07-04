import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  const [isExpand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((preNt) => {
      return {
        ...preNt,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function expand(){
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note">
      {isExpand &&
        <input
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title"
        />
      }
        <textarea
        onClick={expand}
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
        />
        <Zoom in={isExpand}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
