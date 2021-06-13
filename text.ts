interface Location {
    latitude: number,
    longitude: number,
}

type NumberArray = Array<number>;

function data() {
    let positionStand: Location;
    const arr: NumberArray = [1, 2, 3, 4, 5, 6, 7];

    positionStand.latitude = 4.84276321;
    positionStand.longitude = 2.48934873;
}
