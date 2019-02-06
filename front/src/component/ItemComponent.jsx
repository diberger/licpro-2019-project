import React, { Component } from 'react';
import axios from "axios/index";

export default class ItemComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.removeEpisode);
    }

    removeElement(e){
        console.log('http://localhost:5000/episodes/delete/' + e.target.getAttribute('episodeid'));
        axios.delete('http://localhost:5000/episodes/delete/' + e.target.getAttribute('episodeid'))
        .then((response)  => {
            console.log(this.props.removeEpisode);
        })
        .catch(function (error) {
            console.log(error);
        });
    }



    render() {
        let episode = this.props.episode;
        return(
            <tr>
                <td>{episode.name}</td>
                <td>{episode.code}</td>
                <td>{episode.mark}</td>
                <td><a onClick={this.removeElement}><i className="fa fa-trash" episodeid={episode.id}></i></a></td>
            </tr>
        );

    }
}