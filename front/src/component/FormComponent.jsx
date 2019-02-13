import React, {Component} from 'react';
import axios from 'axios'

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {nom: '', code: '', mark: '', error: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch (event.target.id) {
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

    componentDidUpdate(prevProps) {
        if (this.props.episodeId !== prevProps.episodeId) {
            if (this.props.isUpdatePage && this.props.episodeId) {
                let episodeId = this.props.episodeId;
                axios.get('http://localhost:5000/episodes/' + episodeId)
                    .then((response) => {
                        this.setState((state) => ({
                            ...state,
                            nom: response.data.name,
                            code: response.data.code,
                            mark: response.data.mark
                        }));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
        return true;
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.nom.length <= 0 || this.state.code <= 0 || parseInt(this.state.mark) < 0 || parseInt(this.state.mark) > 10){
            this.setState((state) => ({
                ...state,
                error: "Au-moins un des champs n'est pas bon, lequel ? Je sais pas ;)",
            }));
            return;
        }else {
            this.setState((state) => ({
                ...state,
                error: "",
            }));
        }


        if (this.props.isUpdatePage && this.props.episodeId) {
            axios.put('http://localhost:5000/episodes/'+ this.props.episodeId, {
                name: this.state.nom,
                code: this.state.code,
                mark: this.state.mark
            })
                .then((response) => {
                    this.props.putEpisode(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });

        } else {
            axios.post('http://localhost:5000/episodes', {
                name: this.state.nom,
                code: this.state.code,
                mark: this.state.mark
            })
                .then((response) => {
                    this.props.addEpisode(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <div>
                <h3>{this.props.isUpdatePage ? "Modifier" : "Ajouter"} un épisode</h3>
                <form id="form-episode" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp"
                               name="name" placeholder="Nom" value={this.state.nom}
                               onChange={this.handleChange} required={true}/>
                        <small id="nameHelp" className="form-text text-muted">Le nom de la série</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCode">Code</label>
                        <input type="text" className="form-control" id="inputCode" aria-describedby="codeHelp"
                               name="code" placeholder="S01E01" value={this.state.code} onChange={this.handleChange} required={true}/>
                        <small id="codeHelp" className="form-text text-muted">Le code de la série</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMark">Note</label>
                        <input type="number" className="form-control" id="inputMark" aria-describedby="markHelp"
                               name="mark" placeholder="Note /10" value={this.state.mark} onChange={this.handleChange} required={true}/>
                        <small id="markHelp" className="form-text text-muted">Une note sur 10</small>
                    </div>
                    <input type="submit" value="Submit"/>
                    <div className={this.state.error ? 'alert alert-danger' : ''}>
                        {this.state.error}
                    </div>
                </form>
            </div>
        );
    }
}