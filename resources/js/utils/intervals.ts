import { useEffect, useState } from "react";


export const incrementalCarrusel = ( carrusel: object[] ) =>{
  const [timer, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        (currentTime) => {
          if (currentTime < carrusel.length - 1) {
            return currentTime + 1;
          } else {
            currentTime = 0;
            return currentTime;
          }
        }
      );
    }, 8000);
    return () => clearInterval(interval)
  }, [])

  return {timer, setTime};
}
