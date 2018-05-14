export class User {
    name: string;
    map: Map;
    todo: Todo;
}

export class Todo {
    MyList = [];
}

export class Map {
    MapMarkers = [];
    Title: string;
    Position: {lat: number, lng: number};
    Zoom: number;
}