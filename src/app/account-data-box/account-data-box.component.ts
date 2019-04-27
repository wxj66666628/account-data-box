import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClientService} from "../http.service";
import {COMMON} from "../common";
@Component({
  selector: 'account-data-box',
  templateUrl: './account-data-box.component.html',
  styleUrls: ['./account-data-box.component.sass']
})
export class AccountDataBoxComponent implements OnInit, OnDestroy {

  interval: any;
  _start: number = 0;
  _limit: number = 10;
  _sort: string;
  _order: string;
  _total: number;
  secur_url: string = COMMON.API_DOMAIN + 'securities';
  accountList: any;
  sort_enum = {'descend': 'DESC', 'ascend': 'ASC'};
  constructor(
    public httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.get(this.secur_url).subscribe(data=>{
      if (data == false) return;
      this._total = [...data].length;
      this.accountList = [...data].slice(0, 10);
    });
    this.interval = setInterval(() => {
      this.doSearch()
    }, 5000);

  }
  doSearch() {
    this.httpClientService.get(this.secur_url, {
      _start: this._start,
      _limit: this._limit,
      _sort: this._sort,
      _order: this._order
    }).subscribe(data=>{
      if (data == false) return;
      this.accountList = data;
    })
  }
  sort(event) {
    this._sort = event.key;
    this._order = this.sort_enum[event.value];
    this.doSearch();
  }
  pageChange(event) {
    this._start = (event - 1)*10;
    this.doSearch();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
