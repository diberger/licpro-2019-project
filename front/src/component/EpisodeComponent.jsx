import React, {Component} from 'react';
import axios from "axios/index";


export default class EpisodeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            episodeId: this.props.episodeId,
            episode: {}
        };
        this.returnHome = this.returnHome.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/episodes/' + this.state.episodeId)
            .then((response) =>
                this.setState((state) => {
                    return {
                        ...state,
                        episode: response.data
                    }
                }))
            .catch(function (error) {
                console.log(error);
            });
    }

    returnHome(){
        this.props.returnHome();
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.state.episode.name}</h5>
                    <p className="card-text">{this.state.episode.code}</p>
                    <button href="" className="btn btn-dark">{this.state.episode.mark}</button>
                </div>
                <div className="card-body">
                    <button onClick={this.returnHome} type="button" className="btn btn-danger">Retour</button>
                </div>
            </div>
        );
    }
}