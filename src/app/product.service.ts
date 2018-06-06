import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { MessagesService } from './messages.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient, private messagesService: MessagesService) { }
private productUrl = 'api/prod';
  
  getProducts (): Observable<Product[]> {
  return this.http.get<Product[]>(this.productUrl)
    .pipe(
      tap(products => this.log(`fetched products`)),
      catchError(this.handleError('getProducts', []))
    );
}

getProduct(id: number): Observable<Product> {
  const url = `${this.productUrl}/${id}`;
  return this.http.get<Product>(url).pipe(
    tap(_ => this.log(`fetched product id=${id}`)),
    catchError(this.handleError<Product>(`getProduct id=${id}`))
  );
}

updateProduct (product: Product): Observable<any> {
  return this.http.put(this.productUrl, product, httpOptions).pipe(
    tap(_ => this.log(`updated product id=${product.id}`)),
    catchError(this.handleError<any>('updateProduct'))
  );
}


addProduct (product: Product): Observable<Product> {
  return this.http.post<Product>(this.productUrl, product, httpOptions).pipe(
    tap((product: Product) => this.log(`added product w/ id=${product.id}`)),
    catchError(this.handleError<Product>('addProduct'))
  );
}

deleteProduct (product: Product | number): Observable<Product> {
  const id = typeof product === 'number' ? product : product.id;
  const url = `${this.productUrl}/${id}`;

  return this.http.delete<Product>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted product id=${id}`)),
    catchError(this.handleError<Product>('deleteProduct'))
  );
}

searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found products matching "${term}"`)),
      catchError(this.handleError<Product[]>('searchProducts', []))
    );
  }



private log(message: string) {
  this.messagesService.add('productService: ' + message);
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
