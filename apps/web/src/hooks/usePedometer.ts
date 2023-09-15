import { useEffect, useState } from "react";
import useGeolocation from "./useGeolocation";

interface PedometerLastPosition {
  latitude: number | null;
  longitude: number | null;
  timestamp: number | null;
}

export default function usePedometer(options: PositionOptions = {}) {
  const { latitude, longitude, speed } = useGeolocation(options);
  const [lastPosition, setLastPosition] = useState<PedometerLastPosition>({
    latitude: null,
    longitude: null,
    timestamp: null,
  });
  const [stepCount, setStepCount] = useState(0);
  // ? Adjust based on testing, in meters
  const stepDistanceThreshold = 0.8;
  // ? Maximum speed in meters per second
  const maxSpeed = (5 * 1000) / 3600;

  useEffect(() => {
    if (
      lastPosition.latitude !== null &&
      lastPosition.longitude !== null &&
      lastPosition.timestamp !== null &&
      latitude !== null &&
      longitude !== null
    ) {
      const distance = calculateDistance(
        lastPosition.latitude,
        lastPosition.longitude,
        latitude,
        longitude,
      );

      // ? Time difference in seconds
      const timeDiff = (Date.now() - lastPosition.timestamp) / 1000;
      const speedMetersPerSecond =
        speed !== null ? (speed * 1000) / 3600 : distance / timeDiff;

      if (
        distance > stepDistanceThreshold &&
        speedMetersPerSecond <= maxSpeed
      ) {
        setStepCount(stepCount + 1);
      }
    }

    setLastPosition({ latitude, longitude, timestamp: Date.now() });
  }, [latitude, longitude]);

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => {
    // ? Radius of the earth in km
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // ? Distance in meters
    const distance = R * c * 1000;
    return distance;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  return stepCount;
}
