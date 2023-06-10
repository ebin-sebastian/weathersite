import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http:HttpClient) { }

  getWeatherData(city: string) {
    const apiKey = 'e2b2aed7414e3895b38ea2ee1dc13a90';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    return this.http.get(apiUrl);
  }

}
