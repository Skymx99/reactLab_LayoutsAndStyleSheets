import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements';

export default class ProjectCard extends Component {
    render() {
        return(
            <Card title={ this.props.project.name }
                image={ require('../images/project.png') }
            >
                <Button title='View Project' />
            </Card>
        );
    }
}
