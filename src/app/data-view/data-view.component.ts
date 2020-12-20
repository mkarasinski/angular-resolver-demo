import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  data: Object = {};

  constructor(private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data.dataFromApi;
    console.log(this.data);
  }

}
