import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { AutosService } from './autos.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit {

  cotas;

  constructor(private autoService: AutosService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {

    this.spinnerService.show();

    this.autoService.getCotas().subscribe((data) => {
      this.cotas = data;
      this.spinnerService.hide();
    });
  }

}
