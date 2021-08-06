/**
 * Shared types and interfaces for the map features
 */

export interface Coordinates {
    latitude: number,
    longitude: number
}

export const initialState: Coordinates = {
    latitude: 91,
    longitude: 181
}