import { Component, OnInit } from '@angular/core';
import { of, from, Observable} from 'rxjs'
import { map, tap, take } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs-example-one',
  templateUrl: './rxjs-example-one.component.html',
  styleUrls: ['./rxjs-example-one.component.scss']
})
export class RxjsExampleOneComponent implements OnInit {

  public myWordDataStream: string[] = ['apples', 'oranges', 'banana'];
  public myNumberDataStream: number[] = [20, 15, 10, 5, 0];
  //myObservable: Observable<number> = new Observable<number>(1,2,3)

  constructor() { }

  ngOnInit(): void {
    of(2,4,6, 9) // <-- our observable
    .pipe(
      tap(item => console.log(item)),
        map(item => item * 2),
        take(2),
        map(item => item -3),
        tap(item => console.log(item)),
    ).subscribe(x=> {
      //console.log(x) // <--- alternative to 'tap'
    });

  from(this.myNumberDataStream).subscribe(
    item => console.log("items is ...."+ item),
    err => console.error(`error is ${err}`),
    () => console.log("complete")

  );

  of('Apples', 'pears', 'plumbs').subscribe(
    item => console.log("items is ...."+ item),
    err => console.error(`error is ${err}`),
    () => console.log("complete")

  );

  }

}
