import { useEffect, useRef, useState } from "react";
import type { Writable } from "type-fest";

type NotNullableCoordinatesKeys =
  | "accuracy"
  | "altitude"
  | "latitude"
  | "longitude";
type WritableGeolocationCoordinates = Writable<GeolocationCoordinates>;
export interface GeolocationState
  extends Omit<WritableGeolocationCoordinates, NotNullableCoordinatesKeys> {
  loading: boolean;
  error: null | GeolocationPositionError;
  timestamp: number | null;
  altitude: number | null;
  accuracy: number | null;
  latitude: number | null;
  longitude: number | null;
}

// ? https://github.com/uidotdev/usehooks/blob/main/index.js#L269
export default function useGeolocation(options: PositionOptions = {}) {
  const [state, setState] = useState<GeolocationState>({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null,
  });

  const optionsRef = useRef(options);

  useEffect(() => {
    const onEvent = ({ coords, timestamp }: GeolocationPosition) => {
      setState({
        loading: false,
        timestamp,
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
        error: null,
      });
    };

    const onEventError = (error: GeolocationPositionError) => {
      setState((s) => ({
        ...s,
        loading: false,
        error,
      }));
    };

    navigator.geolocation.getCurrentPosition(
      onEvent,
      onEventError,
      optionsRef.current,
    );

    const watchId = navigator.geolocation.watchPosition(
      onEvent,
      onEventError,
      optionsRef.current,
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return state;
}
