import React, {Component} from 'react';
import axios from "axios/index";

export default class ItemComponent extends Component {
    constructor(props) {
        super(props);
        this.removeElement = this.removeElement.bind(this)
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

    render() {
        let episode = this.props.episode;
        return (
            <tr>
                <td>{episode.name}</td>
                <td>{episode.code}</td>
                <td>{episode.mark}</td>
                <td><span onClick={this.removeElement}><i className="fa fa-trash" episodeid={episode.id}></i></span></td>
            </tr>
        );

    }
}