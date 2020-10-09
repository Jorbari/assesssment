import { Component, OnInit } from '@angular/core';
import {ListOfSiteService} from '../service/list-of-site.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  listOfSitesData = [];

  constructor(private service: ListOfSiteService) { }

  ngOnInit(): void {
  }

  getSitesData() {
    // this.service.getListOfSites()
  }

}
