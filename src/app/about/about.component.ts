import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  h1Style = false;

  selectedId: number ;

  forTwoway = '';

  selectList: object =
  [
    {
      id: 1,
      name : 'Drake'
    },
    {
      id: 2,
      name : 'Jason'
    },
    {
      id: 4,
      name: 'Geazy'
    }
  ];


  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const urlMsg = this.route.snapshot.paramMap.get('urlMsg');
    if (urlMsg) {
      console.log(urlMsg);
    }
  }

  changeColor() {
    this.h1Style = !this.h1Style;
  }

  firstClick() {
    this.dataService.firstClick();
  }
}
