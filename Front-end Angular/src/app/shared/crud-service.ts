import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs/operators';

export class CrudService<T extends {id?:number}> {

  constructor(protected httpClient: HttpClient, private API_URL: string) {}


  list() {
    return this.httpClient.get<T[]>(this.API_URL)
    .pipe(
      first(),
      delay(0),
      tap(console.log)
    );
  }

  loadById(id: number) {
    return this.httpClient.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  create(record: T) {
    return this.httpClient.post(this.API_URL, record).pipe(take(1));
  }

  remove(id: number) {
    return this.httpClient.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

  update(record: T) {
    return this.httpClient.put(`${this.API_URL}/${record.id}`, record).pipe(take(1));
  }
}
