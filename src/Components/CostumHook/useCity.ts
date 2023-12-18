import axios from "axios";
import { type } from "os";
import { useEffect, useState } from "react";

const query ="weather?q=";
const apiKey ="21396536a373fc5802cbc8fdf34c40d1";
const baseUrl = "https://api.openweathermap.org/data/2.5";


export type Weather = {
    "coord": {
        "lon": number,
        "lat": number
    },
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": "01d"
        }
    ],
    "base": string,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number
    },
    "visibility": number,
    "wind": {
        "speed": number,
        "deg": number
    },
    "clouds": {
        "all": number
    },
    "dt": number,
    "sys": {
        "type": number,
        "id": number,
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number

}


export const useCity = (namecity: string) => {
    const [city, setCity] = useState<Weather>();
    const [isLoading, setLoading] = useState<boolean>(false);
  
    useEffect(() => {
      const load = async () => {
        setLoading(true);
        setTimeout(async () => {
          const { data } = await axios.get<Weather>(`${baseUrl}/${query}${namecity}&appid=${apiKey}`);
          setCity(data);
          setLoading(false);
        }, 2000);
      };
      load();
    }, [namecity]);
    return [city, setCity, isLoading] as [
      Weather,
      Function,
      boolean
    ];
  };

  export default useCity;