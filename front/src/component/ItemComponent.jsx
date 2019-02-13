import React, {Component} from 'react';
import axios from "axios/index";

export default class ItemComponent extends Component {
    constructor(props) {
        super(props);
        this.removeElement = this.removeElement.bind(this);
        this.showElement = this.showElement.bind(this);
        this.updateElement = this.updateElement.bind(this);
    }

    removeElement(e) {
        let episodeId = e.target.getAttribute('episodeid');
        axios.delete('http://localhost:5000/episodes/delete/' + episodeId)
            .then((response) => {
                this.props.removeEpisode(episodeId);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    showElement(e) {
        let episodeId = e.target.getAttribute('episodeid');
        this.props.showEpisode(episodeId);
    }

    updateElement(e) {
        let episodeId = e.target.getAttribute('episodeid');
        this.props.updateEpisode(episodeId);
    }

    render() {
        let episode = this.props.episode;
        return (
            <tr>
                <td>{episode.name}</td>
                <td>{episode.code}</td>
                <td>{episode.mark}</td>
                <td>
                    <span onClick={this.showElement}><i className="fa fa-couch" episodeid={episode.id}></i></span>
                    <span onClick={this.updateElement}><i className="fa fa-edit" episodeid={episode.id}></i></span>
                    <span onClick={this.removeElement}><i className="fa fa-trash" episodeid={episode.id}></i></span>
                </td>
            </tr>
        );

    }
}