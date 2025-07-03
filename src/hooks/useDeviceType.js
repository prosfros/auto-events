// src/hooks/useDeviceType.js
import { useState, useEffect } from "react";

export default function useDeviceType() {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    const isMobile = /iPhone|Android.*Mobile|Windows Phone/i.test(userAgent);
    
    if (isMobile) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
  }, []);

  return device;
}
