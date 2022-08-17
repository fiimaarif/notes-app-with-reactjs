import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: 50,
      title: '',
      body: '',
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onCloseEventHandler = this.onCloseEventHandler.bind(this);
  }
  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        character: 50 - event.target.value.length,
        title: event.target.value,
      };
    });
  }
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    if (!this.state.title || !this.state.body) {
      alert('isi terlebih dahulu');
    } else {
      this.props.addNote(this.state);
      this.setState(() => {
        return {
          character: 50,
          title: '',
          body: '',
        };
      });
      this.onCloseEventHandler();
    }
  }
  onCloseEventHandler(event) {
    const modal = document.querySelector('.modal');
    modal.classList.add('d-none');
    this.setState(() => {
      return {
        title: '',
        body: '',
      };
    });
  }
  render() {
    return (
      <div className="row modal d-flex justify-content-center align-items-center d-none">
        <div className="col-lg-5">
          <div className="card shadow-lg">
            <div className="card-header text-center bg-success text-light">
              Add new notes
            </div>
            <form
              id="form-note"
              className="mb-3 p-2 "
              onSubmit={this.onSubmitEventHandler}
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Input title
              </label>
              <p className="float-end">
                Sisa karakter : {this.state.character}
              </p>
              <input
                type="text"
                className="form-control shadow-none"
                id="exampleFormControlInput1"
                placeholder="notes title..."
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler}
                maxLength="50"
              />
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Input notes
                </label>
                <textarea
                  className="form-control shadow-none"
                  id="exampleFormControlTextarea1"
                  placeholder="input notes..."
                  rows="3"
                  value={this.state.body}
                  onChange={this.onBodyChangeEventHandler}
                ></textarea>
                <button
                  type="reset"
                  className="btn btn-success  mt-2"
                  onClick={this.onSubmitEventHandler}
                >
                  <i className="fa-solid fa-plus"></i>
                  Add notes
                </button>
                <button
                  type="button"
                  className="btn btn-danger mt-2 float-end"
                  onClick={this.onCloseEventHandler}
                >
                  <i className="fa-solid fa-x"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteInput;
