import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Image,
    Text,
    FAB,
} from './styled';

function Item({image, title, ratings, id}) {
    return (
        <a href={'/detail/' + id}>
            <Container>
                <Image image={image}/>
                <Text weight='bolder' relative>
                    {title}
                </Text>
                <FAB>{ratings}</FAB>
            </Container>

        </a>

    );
}

Item.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.any,
    ratings: PropTypes.any
};

Item.defaultProps = {
    image: '',
    title: '',
    ratings: '',
    id: '',
};

export default Item;
