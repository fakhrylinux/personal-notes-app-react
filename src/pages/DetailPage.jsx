import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data.js";
import { useNavigate, useParams } from "react-router";
import { showFormattedDate } from "../utils/index.js";
import ToggleArchiveButton from "../components/ToggleArchiveButton.jsx";
import DeleteButton from "../components/DeleteButton.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import React from "react";
import parser from "html-react-parser";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();

  const navigate = useNavigate();

  const onArchiveHandler = (id) => {
    archiveNote(id);
    navigate("/");
  };

  const onUnArchiveHandler = (id) => {
    unarchiveNote(id);
    navigate("/archive");
  };

  const onDeleteHandler = (id) => {
    deleteNote(id);
    navigate("/");
  };

  return (
    <DetailPage
      id={id}
      onArchive={onArchiveHandler}
      onUnArchive={onUnArchiveHandler}
      onDelete={onDeleteHandler}
    />
  );
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (!this.state.note) return <NotFoundPage />;
    const toggleArchive = this.state.note.archived
      ? this.props.onUnArchive
      : this.props.onArchive;
    const toggleArchiveButton = this.state.note.archived
      ? "unarchive"
      : "archive";

    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{this.state.note.title}</h3>

        <p className="detail-page__createdAt">
          {showFormattedDate(this.state.note.createdAt)}
        </p>
        <div className="detail-page__body">{parser(this.state.note.body)}</div>
        <div className="detail-page__action">
          <div>
            <ToggleArchiveButton
              id={this.state.note.id}
              toggleArchive={toggleArchive}
              toggleInnerText={toggleArchiveButton}
            />
          </div>
          <div>
            <DeleteButton
              id={this.state.note.id}
              onDelete={this.props.onDelete}
            />
          </div>
        </div>
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func,
  onUnArchive: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
