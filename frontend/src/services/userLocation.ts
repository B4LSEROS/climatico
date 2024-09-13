type Position = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

export default function userLocation(
  successCallback: (position: Position) => void,
  errorCallback: () => void
) {
  if (navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback
    );
  } else {
    errorCallback();
  }
}
