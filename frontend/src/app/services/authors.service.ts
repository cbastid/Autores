import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get(environment.servicioGetAllAuthors);
  }

  getAuthorById(id:String) {
    let url= `${environment.servicioGetByIdAuthor}/${id}`;
    return this._http.get(url);
  }

  newAuthor(authorName:String){
    let author = ({name: authorName})
    return this._http.post(environment.servicioNewAuthor,author);
  }

  editAuthor(id:String, name: any) {
    let url= `${environment.servicioUpdateAuthor}/${id}`;
    return this._http.put(url, name);
  }

  deleteAuthor(id:String) {
    let url= `${environment.servicioDeleteAuthor}/${id}`;
    return this._http.delete(url);
  }


}
