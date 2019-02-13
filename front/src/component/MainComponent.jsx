import React, {Component} from 'react';
import TableComponent from "./TableComponent";
import FormComponent from "./FormComponent";
import EpisodeComponent from "./EpisodeComponent";

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            isEpisodePage: false,
            isUpdatePage: false,
            episodeID: null,
            episodes: []
        };
        this.addEpisode = this.addEpisode.bind(this);
        this.putEpisode = this.putEpisode.bind(this);
        this.removeEpisode = this.removeEpisode.bind(this);
        this.showEpisode = this.showEpisode.bind(this);
        this.updateEpisode = this.updateEpisode.bind(this);
        this.returnHome = this.returnHome.bind(this);
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

    putEpisode(episode) {
        this.setState((state) => {
            let episodes = state.episodes;
            episodes.forEach(function (val, index) {
                if (val.id === episode.id) {
                    episodes[index] = episode
                }
            });
            return {
                ...state,
                episodes: episodes,
                isUpdatePage : false
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

    showEpisode(idEpisode) {
        this.setState((state) => {
            return {
                ...state,
                episodeID: idEpisode,
                isEpisodePage: true
            }
        });
    }

    updateEpisode(idEpisode) {
        this.setState((state) => {
            return {
                ...state,
                episodeID: idEpisode,
                isUpdatePage: true
            }
        });
    }

    returnHome() {
        this.setState((state) => {
            return {
                ...state,
                isEpisodePage: false
            }
        });
    }

    render() {
        if (!this.state.isEpisodePage) {
            return (
                <div className="row">
                    <div className="col-md-6">
                        <h3>Liste des épisodes vu</h3>
                        <TableComponent episodes={this.state.episodes}
                                        removeEpisode={this.removeEpisode}
                                        showEpisode={this.showEpisode}
                                        updateEpisode={this.updateEpisode}/>
                    </div>
                    <div className="col-md-6">
                        <FormComponent addEpisode={this.addEpisode} putEpisode={this.putEpisode} isUpdatePage={this.state.isUpdatePage} episodeId={this.state.episodeID}/>
                    </div>
                </div>
            );
        }
        return <EpisodeComponent episodeId={this.state.episodeID} returnHome={this.returnHome}/>
    }
}