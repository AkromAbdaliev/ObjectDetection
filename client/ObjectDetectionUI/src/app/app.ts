import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ImgControl} from './components/img-control/img-control'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImgControl],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ObjectDetectionUI');
}
