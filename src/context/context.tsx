import React, { useState, createContext } from 'react';
import { contextProps } from '../components/common.type';

type Focus360ContextProviderProps = {
    children: React.ReactNode
}
const contextDefaultValues: contextProps = {
    currentImage: 1,
    setcurrentImage: () => { }
};


export const Focus360Context = createContext<contextProps>(contextDefaultValues);

const Focus360Provider = ({ children }: Focus360ContextProviderProps) => {

    //const [properties, setproperties] = useState(contextDefaultValues.properties);
    //const updatePreviewImage = (currentImage: number) => setcurrentImage(currentImage);
    const [currentImage, setcurrentImage] = useState<number>(2);


    return (<Focus360Context.Provider value={{
        currentImage,
        setcurrentImage
    }}>
        {children}
    </Focus360Context.Provider>)
}

export default Focus360Provider;