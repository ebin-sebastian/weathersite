import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from './services/weatherservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private weatherservice:WeatherserviceService){

  }

  city:string='kochi';
  weatherdata: any;
  name: string='MARS';
  temperature: number =0;
  temp_min:number=0;
  temp_max:number=0;
  humidity:number =0;
  wind:number =0;
  

  
  ngOnInit(): void {
   this.getweatherData(this.city)
   this.city=''
   console.log(this.city+'the')

  }
  onSubmit(){
    this.getweatherData(this.city)
    console.log(this.city+'thweqe')
  }

  private getweatherData(city:string){
    this.weatherservice.getWeatherData(city).subscribe({
      next:(res)=>{
        console.log(res)
        this.weatherdata = res
        console.log(this.weatherdata.main.temp)
        this.name = this.weatherdata.name;
        this.temperature = this.weatherdata.main.temp;
        this.temp_max= this.weatherdata.main.temp_max;
        this.temp_min= this.weatherdata.main.temp_min;
        this.humidity = this.weatherdata.main.humidity;
        this.wind = this.weatherdata.wind.speed;
        
      },
      error:(err)=> console.log(err.message),
      complete: ()=> console.info('api call complete')
      
    })
  }

  title = 'weather';
}
