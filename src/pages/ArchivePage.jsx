import React from "react";
import { getArchivedNotes } from "../utils/local-data.js";
import NotesList from "../components/NotesList.jsx";
import { useSearchParams } from "react-router";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar.jsx";

function ArchiveWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };
  }

  onKeywordChangeHandler = (keyword) => {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  };

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <div className="content">
        <section className="note_shelf">
          <h2>Archive Note Note</h2>
          <SearchBar
            keywordChange={this.onKeywordChangeHandler}
            keyword={this.state.keyword}
          />

          {notes.length === 0 ? (
            <p className="notes-list__empty-message">No Note</p>
          ) : (
            <NotesList notes={notes} />
          )}
        </section>
      </div>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default ArchiveWrapper;
