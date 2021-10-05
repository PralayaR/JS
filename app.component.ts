import { Component } from '@angular/core';


interface cashData {
  account: String;
  currentAvailableCash: String;
  cashPercentageChange: number;
  previousavailableCash: String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'robinhood-clone-ng-ns';
  showLoadMore: boolean = true;
  cashSortOrder: string = '';
  accountSortOrder: string = '';
  dataToShow: Array<cashData> = [{account:"IRA-5203", currentAvailableCash:"$5,763.36",cashPercentageChange:-0.08,previousavailableCash:"$8,916.69"},
  {account:"AAA-1012", currentAvailableCash:"$8,763.36",cashPercentageChange:0.21,previousavailableCash:"$9,918.69"},
  {account:"AAA-5200", currentAvailableCash:"$3,263.36",cashPercentageChange:0.48,previousavailableCash:"$4,416.69"}];
  data: Array<cashData> = [
    {account:"IRA-5203", currentAvailableCash:"$5,763.36",cashPercentageChange:-0.08,previousavailableCash:"$8,916.69"},
    {account:"AAA-1012", currentAvailableCash:"$8,763.36",cashPercentageChange:0.21,previousavailableCash:"$9,918.69"},
    {account:"AAA-5200", currentAvailableCash:"$3,263.36",cashPercentageChange:0.48,previousavailableCash:"$4,416.69"},
    {account:"AAA-3810", currentAvailableCash:"$5,863.36",cashPercentageChange:1.8,previousavailableCash:"$6,916.69"},
    {account:"IRA-5230", currentAvailableCash:"$1,263.36",cashPercentageChange:0.28,previousavailableCash:"$1,916.69"},
      {account:"AAA-1312", currentAvailableCash:"$1,733.36",cashPercentageChange:0.31,previousavailableCash:"$1,918.69"},
      {account:"IRA-4200", currentAvailableCash:"$3,323.36",cashPercentageChange:0.29,previousavailableCash:"$3,416.69"},
      {account:"AAA-3850", currentAvailableCash:"$5,363.36",cashPercentageChange:-1.8,previousavailableCash:"$4,916.69"}
  ];

  loadMoreData() {
    this.dataToShow = this.data;
    this.showLoadMore = false;
  }

  sort(type: string) {
    if (type == 'cash') {
        if (this.cashSortOrder == '' || this.cashSortOrder == 'desc') {
            this.cashSortOrder = 'asc';
            this.data.sort(function(a, b) {
                return parseInt(a.currentAvailableCash.replace('$', '').replace(',', '')) - parseInt(b.currentAvailableCash.replace('$', '').replace(',', ''));
            });
        } else {
            this.cashSortOrder = 'desc';
            this.data.sort(function(a, b) {
                return parseInt(b.currentAvailableCash.replace('$', '').replace(',', '')) - parseInt(a.currentAvailableCash.replace('$', '').replace(',', ''));
            });
        }
    } else {
        if (this.accountSortOrder == '' || this.accountSortOrder == 'desc') {
            this.accountSortOrder = 'asc';
            this.data.sort(function(a, b) {
                return parseInt(a.account.replace('IRA-', '').replace('AAA-', '')) - parseInt(b.account.replace('IRA-', '').replace('AAA-', ''));
            });
        } else {
            this.accountSortOrder = 'desc';
            this.data.sort(function(a, b) {
                return parseInt(b.account.replace('IRA-', '').replace('AAA-', '')) - parseInt(a.account.replace('IRA-', '').replace('AAA-', ''));
            });
        }
    }
    this.dataToShow = [];
            if (this.showLoadMore) {
                this.data.forEach((el, index) => {
                    if (index < 3) {
                        this.dataToShow.push(el);
                    }
                });
            } else {
                this.dataToShow = this.data;
            }
  }
  
}
