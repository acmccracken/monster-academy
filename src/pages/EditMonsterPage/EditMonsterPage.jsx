import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditMonsterPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.monster
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateMonster(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
        <>
          <h1>Add Monster</h1>
          <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Monster Name (required)</label>
              <input
                className="form-control"
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Monster HP </label>
              <input
                className="form-control"
                name="hp"
                value={this.state.formData.hp}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Monster MP</label>
              <input
                className="form-control"
                name="mp"
                value={this.state.formData.mp}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Monster Attack</label>
              <input
                className="form-control"
                name="attack"
                value={this.state.formData.attack}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Monster Defense</label>
              <input
                className="form-control"
                name="denfese"
                value={this.state.formData.defense}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              Edit Monster
              </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
          </form>
        </>
      );
  }
}

export default EditMonsterPage;