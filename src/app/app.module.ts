import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http'

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

import { AppComponent } from './app.component';
import { GraficaComponent } from './components/grafica/grafica.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule, 
    SocketIoModule.forRoot(config),
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
