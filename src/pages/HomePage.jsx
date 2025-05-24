import React from "react";
import { getActiveNotes } from "../utils/local-data.js";
import NotesList from "../components/NotesList.jsx";
import { useSearchParams } from "react-router";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar.jsx";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
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
          <h2>Active Note</h2>
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

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
