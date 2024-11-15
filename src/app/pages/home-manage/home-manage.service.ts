import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeManageService {

constructor(private http: HttpClient) { }

  // 获取列表
  getUserList(): Observable<any> {
    return this.http.get('assets/list-role.json');
  } 


}
