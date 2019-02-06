import React, {Component} from 'react';
import TableComponent from "./TableComponent";
import FormComponent from "./FormComponent";

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            episodes: []
        };
        this.addEpisode = this.addEpisode.bind(this);
        this.removeEpisode = this.removeEpisode.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:5000/episodes")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState((state) => ({
                        ...state,
                        isLoaded: true,
                        episodes: result
                    }));
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    addEpisode(episode) {
        this.setState((state) => {
            let episodes = state.episodes;
            episodes.push(episode);
            return {
                ...state,
                episodes: episodes
            }
        });
    }

    removeEpisode(idEpisode) {
        this.setState((state) => {
            let episodes = state.episodes;
            episodes.forEach(function (val, index) {
                if (val.id === idEpisode) {
                    episodes.splice(index, 1);
                }
            });
            return {
                ...state,
                episodes: episodes
            }
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <p>Liste des episodes vu</p>
                    <TableComponent episodes={this.state.episodes} removeEpisode={this.removeEpisode}/>
                </div>
                <div className="col-md-6">
                    <p>Ajouter un épisode</p>
                    <FormComponent addEpisode={this.addEpisode}/>
                </div>
            </div>
        );
    }
}