import { Component, OnInit } from '@angular/core';

import { AutosService } from './autos.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit {

  cotas;

  constructor(private autoService: AutosService) { }

  ngOnInit() {

    this.autoService.getCotas().subscribe((data) => {
      this.cotas = data;
    });
  }

}
