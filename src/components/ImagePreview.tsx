import React, { useEffect, useContext } from 'react';
import { Focus360Context } from '../context/context';
import { ImagePreviewProps } from './common.type';

function ImagePreview({ properties }: ImagePreviewProps) {

    //const [currentImage, setcurrentImage] = useState(0);
    const { currentImage, setcurrentImage } = useContext(Focus360Context);
    const mystyle = {
        width: "100%",
        height: "100%",
        padding: "2px",
        outline: "2px solid black"
    };

    const switchImage = () => {
        if (currentImage < properties.length - 1) {
            setcurrentImage(() => currentImage + 1);
        } else {
            setcurrentImage(0);
        }
        return currentImage;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            switchImage();
        }, 5000)
        return () => clearInterval(interval);
    }, [currentImage])


    return (
        <div className='image-preview'>
            <img src={properties[currentImage].propertyImageURL} alt={properties[currentImage].propertyName} style={mystyle} />
        </div>
    );
}

export default ImagePreview;