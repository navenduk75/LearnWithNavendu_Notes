import { Component, OnInit } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-observable-vs-promise',
  templateUrl: './observable-vs-promise.component.html',
  styleUrls: ['./observable-vs-promise.component.css'],
})
export class ObservableVsPromiseComponent implements OnInit {
  ngOnInit(): void {
    this.promiseDemo();
    this.observableDemo();
  }

  async promiseDemo() {
    const data = await Promise.resolve('P-123');
    console.log(data);
  }

  async observableDemo() {
    //console.log(2);

    // const data = await of('O-123').toPromise();
    const data = await firstValueFrom(of('O-123'));
    console.log(data);
  }
}
