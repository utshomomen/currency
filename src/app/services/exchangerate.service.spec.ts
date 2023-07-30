// import { TestBed } from '@angular/core/testing';

// // import { ExchangerateService } from './exchangerate.service';

// describe('ExchangerateService', () => {
//   let service: ExchangerateService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(ExchangerateService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public users : User[];

  constructor(private http: HttpClient) {
    this.users = [];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData();
  }

  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next : (response:any) => {
        if(response && response.length){
          this.users = response.map((u:any) => {
            u['city'] = this.getCity(u['address']);
            return u;
          });
        } else {
          this.users = [];
        }
      },
      error : (error) =>{
        this.users = [];
      }
    })
  }

  getCity(address:any){
    if(address.city){
      return `Residing at ${address.city}`
    }
    return "No city specified";
  }
}
interface User{
  name: string,
  email: string,
  city: string
}
