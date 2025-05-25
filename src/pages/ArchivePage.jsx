import React from "react";
import { getArchivedNotes } from "../utils/api.js";
import NotesList from "../components/NotesList.jsx";
import { useSearchParams } from "react-router";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar.jsx";
import LocaleContext from "../contexts/LocaleContext.js";
import ProgressBar from "../components/ProgressBar.jsx";

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
      notes: [],
      keyword: props.defaultKeyword || "",
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState(() => {
      return { loading: true };
    });
    const { data } = await getArchivedNotes();
    this.setState(() => {
      return { loading: false };
    });
    this.setState(() => {
      return {
        notes: data,
      };
    });
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
      <LocaleContext.Consumer>
        {({ locale }) => {
          return (
            <>
              {this.state.loading && <ProgressBar />}
              <div className="content">
                <section className="container note_shelf">
                  <h2>{locale === "id" ? "Arsip Catatan" : "Note Archive"}</h2>
                  <SearchBar
                    keywordChange={this.onKeywordChangeHandler}
                    keyword={this.state.keyword}
                  />

                  {notes.length === 0 ? (
                    <p className="notes-list__empty-message">
                      {locale === "id" ? "Tidak ada catatan" : "No Note"}
                    </p>
                  ) : (
                    <NotesList notes={notes} />
                  )}
                </section>
              </div>
            </>
          );
        }}
      </LocaleContext.Consumer>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default ArchiveWrapper;
