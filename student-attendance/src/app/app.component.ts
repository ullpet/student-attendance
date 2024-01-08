import { TuiRootModule, TuiAlertModule } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TuiRootModule, TuiAlertModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {}
