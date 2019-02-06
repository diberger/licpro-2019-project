import React, { Component } from 'react';
import axios from 'axios'
export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {nom: '', code: '', mark: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch(event.target.id){
            case 'inputName' :
                this.setState({nom: event.target.value});
                break;
            case 'inputCode' :
                this.setState({code: event.target.value});
                break;
            case 'inputMark' :
                this.setState({mark: event.target.value});
                break;
            default:
                break;
        }

    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:5000/episodes', {
            name: this.state.nom,
            code: this.state.code,
            mark: this.state.mark
        })
            .then((response)  => {
                this.props.addEpisode(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <form id="form-episode" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp"
                               name="name" value={this.state.nom} onChange={this.handleChange}/>
                        <small id="nameHelp" className="form-text text-muted">Le nom de la série</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCode">Code</label>
                        <input type="text" className="form-control" id="inputCode" aria-describedby="codeHelp"
                               name="code" value={this.state.code} onChange={this.handleChange}/>
                        <small id="codeHelp" className="form-text text-muted">Le code de la série</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMark">Mark</label>
                        <input type="number" className="form-control" id="inputMark" aria-describedby="markHelp"
                               name="mark" value={this.state.mark} onChange={this.handleChange}/>
                        <small id="markHelp" className="form-text text-muted">Une note sur 10</small>
                    </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}