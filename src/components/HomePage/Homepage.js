import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';

const BaseUrl = 'http://localhost:8000';

const HomePage = ({ bodyMargin }) => {
    return (
        <Container text style={bodyMargin}>
            <Header as='h1'>Semantic UI React Fixed Template</Header>
            <p>This is a basic fixed menu template using fixed size containers.</p>
            <p>A text container is used for the main container, which is useful for single column layouts.</p>
        </Container>
    );
}

export default HomePage;