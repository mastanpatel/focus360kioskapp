import React, { useContext } from 'react';
import { SideBarProps } from './common.type';
import PropertiesList from './PropertiesList';


function SideBar(props: SideBarProps) {


    return (
        <div className='sidebar'>
            <PropertiesList properties={props.properties}></PropertiesList>
        </div>
    );
}

export default SideBar;