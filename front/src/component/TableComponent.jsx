import React, {Component} from 'react';
import ItemComponent from './ItemComponent.jsx';

export default class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.removeEpisode = this.removeEpisode.bind(this);
        this.showEpisode = this.showEpisode.bind(this);
        this.updateEpisode = this.updateEpisode.bind(this);
    }

    removeEpisode(episodeId) {
        this.props.removeEpisode(episodeId);
    }

    showEpisode(episodeId) {
        this.props.showEpisode(episodeId);
    }

    updateEpisode(episodeId) {
        this.props.updateEpisode(episodeId);
    }

    render() {
        const result = this.props.episodes.map(item => {
            return <ItemComponent key={item.id} episode={item} removeEpisode={this.removeEpisode} showEpisode={this.showEpisode} updateEpisode={this.updateEpisode} />
        });
        return (
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Code</th>
                    <th>Note</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {result}
                </tbody>
            </table>
        );
    }

}