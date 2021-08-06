/**
 * This is the dedicated function for retrieving coordinates from a given address (geocoding).
 * Geocoding feature is provided by HERE API: (https://www.here.com/)
 */

import { Coordinates, initialState } from "../shared/typesAndInterfaces"
import axios, { AxiosResponse } from 'axios'

export const getCoordinatesFromHereApi = async (query: string): Promise<Coordinates> => {

    const params = {
        q: query,
        /** 
         * DISCLAIMER
         * As stated in the README.md, DO NOT store your HERE API Key in a .env file!
         * I'm using process.env.REACT_APP_HERE_API just for personal local testing.
        */
        apiKey: process.env.REACT_APP_HERE_API
    }

    const apiCall = "https://geocode.search.hereapi.com/v1/geocode"

    let coordinatesToReturn: Coordinates = initialState
    

    // fetch coordinates from HERE API using axios
    await axios
        .get(apiCall, { params })
        .then((response: AxiosResponse<any>) => {

            console.log("Response from HERE API: ", response.data.items)

            // if we have at least one result from the HERE api call, it makes sense to update the coordinates for the map
            if (response.data.items.length > 0) {

                // pick the highest queryScore (HERE accuracy about a given address) item in the response array
                const mostAccurateItem = response.data.items.reduce((itemWithMaxScore: any, singleItem: any) => itemWithMaxScore.scoring.queryScore > singleItem.scoring.queryScore ? itemWithMaxScore : singleItem)

                coordinatesToReturn = {
                    latitude: mostAccurateItem.position.lat ? mostAccurateItem.position.lat : 92,
                    longitude: mostAccurateItem.position.lng ? mostAccurateItem.position.lng : 182
                }

            }

        })
        .catch(error => console.log(error))

    return coordinatesToReturn

}