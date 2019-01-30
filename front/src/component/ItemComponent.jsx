'use strict';
import React, { Component } from 'react';

export default class ItemComponent extends Component {
    render() {
        let episode = this.props.episode;
        return(
            <tr >
                <td>{episode.name}</td>
                <td>{episode.code}</td>
                <td>{episode.mark}</td>
            </tr>
        );

    }
}