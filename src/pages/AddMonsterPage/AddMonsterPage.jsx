import React, {Component} from 'react';

class AddMonsterPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      mp: '0',
      hp: '0',
      attack: '0',
      defense: '0',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddMonster(this.state.formData);
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
            <label>Monster HP (required)</label>
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
            ADD Monster
          </button>
        </form>
      </>
    );
  }
}

export default AddMonsterPage;