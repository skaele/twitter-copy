import React from 'react';

import './post-add-form.css';

class PostAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            outputText: ""
        };
        this.onInputTextChanged = this.onInputTextChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputTextChanged(event) {
        this.setState({ outputText: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.outputText);
        this.setState({ outputText: "" });
    }

    render() {
        return (
            <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                <input type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onInputTextChanged}
                    value={this.state.outputText}
                />
                <button type="submit"
                    className="btn btn-outside-secondary" >
                    Добавить
            </button>
            </form>
        );
    }
}

export default PostAddForm;