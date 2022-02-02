import React, { useContext } from 'react';
import { PropertiesListProps } from './common.type';
import { Focus360Context } from '../context/context';

function PropertiesList(props: PropertiesListProps) {
    // const mystyle = {
    //     width: "150px",
    //     height: "150px",
    //     margin: "3px 5px",
    //     "@media (min-width: 1200px)": {
    //         width: "150px",
    //         height: "150px",
    //         margin: "3px 5px",
    //     },
    //     "@media (max-width: 992px)": {
    //         width: "120px",
    //         height: "120px",
    //         margin: "3px 5px",
    //     },
    //     "@media (max-width: 768px)": {
    //         width: "100px",
    //         height: "100px",
    //         margin: "3px 5px",
    //     },
    //     "@media (max-width: 600px)": {
    //         width: "80px",
    //         height: "80px",
    //         margin: "3px 5px",
    //     }
    // };
    const { currentImage, setcurrentImage } = useContext(Focus360Context);
    const handleMouseHover = (event: any) => {
        event.target.style.outline = "1px solid black"
    }

    const handleMouseLeave = (event: any) => {
        event.target.style.outline = ""
    }

    return (
        <div>
            {props.properties.map((property, index) => {
                return <img key={index} src={property.propertyImageURL} alt={property.propertyName} className="properties-style" onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave} onClick={() => setcurrentImage(index)} />
            })}
        </div>
    );
}

export default PropertiesList;