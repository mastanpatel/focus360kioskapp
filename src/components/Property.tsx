import React from 'react';
import { PropertyProps } from './common.type';


function Property(props: PropertyProps) {
    return (
        <img src={props.property.propertyImageURL} alt={props.property.propertyName} />
    );
}

export default Property;