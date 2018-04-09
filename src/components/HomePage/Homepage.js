import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';

const BaseUrl = 'http://localhost:8000';

const HomePage = ({ bodyMargin }) => {
    return (
        <Container text style={bodyMargin}>
            <Header as='h1'>Semantic UI React Fixed Template</Header>
            <p>This is a basic fixed menu template using fixed size containers.</p>
            <p>A text container is used for the main container, which is useful for single column layouts.</p>
            <img src={`${BaseUrl}/gifs/My%20Test%20Flipbook`} />
            <Image src='/assets/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        </Container>
    );
}

export default HomePage;