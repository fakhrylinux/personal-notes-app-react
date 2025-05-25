import React from "react";
import { getActiveNotes } from "../utils/api.js";
import NotesList from "../components/NotesList.jsx";
import { useSearchParams } from "react-router";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar.jsx";
import LocaleContext from "../contexts/LocaleContext.js";

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
      notes: [],
      keyword: props.defaultKeyword || "",
    };
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();
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
            <div className="content">
              <section className="note_shelf">
                <h2>{locale === "id" ? "Catatan Aktif" : "Active Note"}</h2>
                <SearchBar
                  keywordChange={this.onKeywordChangeHandler}
                  keyword={this.state.keyword}
                />

                {notes.length === 0 ? (
                  <p className="notes-list__empty-message">
                    {locale === "id" ? "Tidak ada catatan" : "No Notes"}
                  </p>
                ) : (
                  <NotesList notes={notes} />
                )}
              </section>
            </div>
          );
        }}
      </LocaleContext.Consumer>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
