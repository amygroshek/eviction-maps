import { MapDataObject } from './map-data-object';

export interface MapDataAttribute extends MapDataObject {
    id: string;
    name: string;
    format?: string;
    default?: string;
    fillStops?: {
        [id: string]: Array<Array<any>>
    };
}
