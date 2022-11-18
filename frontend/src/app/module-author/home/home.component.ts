import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listAuthors: any;
  constructor(private _authorservices: AuthorsService) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  getAllAuthors() {

    let observable = this._authorservices.getAll();
    observable.subscribe(data => {
      this.listAuthors = data;
      // console.log(data);

    });

  }

  deleteAuthor(id: String) {
    // console.log("id " + id);
    let observable = this._authorservices.deleteAuthor(id);
    observable.subscribe(data => {
      this.listAuthors = data;
      this.getAllAuthors();
    });
  }

}
