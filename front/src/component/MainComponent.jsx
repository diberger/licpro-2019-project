'use strict';
import React, { Component } from 'react';
import ItemComponent from './ItemComponent.jsx';
export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/episodes")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        let result;
        if(items.series !== undefined) {
            result = items.series.map(item => {
                return <ItemComponent episode={item}/>
            });
        }
        let html = "";
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <table className="table table-bordered">
                    <tr>
                        <th>Nom</th>
                        <th>Code</th>
                        <th>Note</th>
                    </tr>
                    <tbody>
                    {result}
                    </tbody>
                </table>
            );
        }
    }
}