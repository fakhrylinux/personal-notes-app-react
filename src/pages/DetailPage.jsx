import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/api.js";
import { useNavigate, useParams } from "react-router";
import { showFormattedDate } from "../utils/index.js";
import ToggleArchiveButton from "../components/ToggleArchiveButton.jsx";
import DeleteButton from "../components/DeleteButton.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../components/ProgressBar.jsx";

function DetailPageWrapper() {
  const { id } = useParams();

  const navigate = useNavigate();

  const onArchiveHandler = async (id) => {
    await archiveNote(id);
    navigate("/");
  };

  const onUnArchiveHandler = async (id) => {
    await unarchiveNote(id);
    navigate("/archive");
  };

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
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
      note: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState(() => {
      return {
        loading: true,
      };
    });
    const { data } = await getNote(this.props.id);
    this.setState(() => {
      return {
        loading: false,
      };
    });
    this.setState(() => {
      return {
        note: data,
      };
    });
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
      <>
        {this.state.loading && <ProgressBar />}
        <section className="detail-page">
          <h3 className="detail-page__title">{this.state.note.title}</h3>

          <p className="detail-page__createdAt">
            {showFormattedDate(this.state.note.createdAt)}
          </p>
          <div className="detail-page__body"> {this.state.note.body} </div>
          <div className="detail-page__action">
            <div>
              <ToggleArchiveButton
                id={this.props.id}
                toggleArchive={toggleArchive}
                toggleInnerText={toggleArchiveButton}
              />
            </div>
            <div>
              <DeleteButton id={this.props.id} onDelete={this.props.onDelete} />
            </div>
          </div>
        </section>
      </>
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
