import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 10, 0, 0, 0],
        label: 'Ventas'
      }
    ],
    labels: [ 'Enero', 'Febrero', 'Marzo', 'Abril']
  };

  public lineChartType: ChartType = 'line';

  constructor(
    private http: HttpClient,
    public wsService: WebsocketService
    ) { }

  ngOnInit(): void {

    this.getData();
    this.escucharSocket()


    // setInterval( () => {
    //     const newData = [
    //       Math.round( Math.random() * 100),
    //       Math.round( Math.random() * 100),
    //       Math.round( Math.random() * 100),
    //       Math.round( Math.random() * 100)
    //     ];
    //     console.log(newData)
    //   this.lineChartData = {
    //     datasets: [{data: newData, label: 'Ventas'}],
    //     labels: this.lineChartData.labels
    //   }
      
    // }, 3000)
  }

  getData() {
    this.http.get('http://localhost:5000/grafica').subscribe((data:any)=>this.lineChartData = data)
  }

  escucharSocket() {
    this.wsService.listen('cambio-grafica').subscribe((data:any)=>{
      console.log('Sockcet',data)
      this.lineChartData = data
    })
  }
}
