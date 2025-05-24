import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      createdAt: +new Date(),
      archived: false,
    };
  }

  onTitleChangeEventHandler = (event) => {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  };

  onContentChangeEventHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };

  onInputHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  };

  render() {
    return (
      <div className="note-input">
        <h2>Create Note</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            className="note-input__title"
            placeholder="Title"
            value={this.state.name}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          <div
            className="note-input__body"
            onInput={this.onInputHandler}
            onChange={this.onContentChangeEventHandler}
            contentEditable
            data-placeholder="Note..."
          ></div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
