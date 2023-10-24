import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.scss'],
})
export class DependencyComponent {
  dependencyOb$ = this.myServiceService.myServiceData$;
  constructor(private myServiceService: MyServiceService) {}
}
