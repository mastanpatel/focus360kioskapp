import React from "react"
export type property = {
    propertyName: string
    propertyImageURL: string
}
export type PropertyProps = {
    property: property
}

export type NavBarProp = {

}

export type PropertiesListProps = {
    properties: property[]
}

export type SideBarProps = {
    properties: property[]
}

export type ImagePreviewProps = {
    properties: property[]
}

export type contextProps = {
    currentImage: number
    setcurrentImage: React.Dispatch<React.SetStateAction<number>>
}