import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class AddressBookServiceService {
  private addUrl = 'http://localhost:8084/address-book/add-contact'
  private getUrl = 'http://localhost:8084/address-book/get-contacts'
  private deleteUrl = 'http://localhost:8084/address-book/delete-contact/'
  private editUrl = 'http://localhost:8084/address-book/edit-contact/'
  private getByIdUrl = 'http://localhost:8084/address-book/get-contact/'
  private getStateByIdUrl = 'http://localhost:8084/address-book/get-state/'
  constructor(private http : HttpClient) { }
  addContact(contact : any) : Observable<any>{
    return this.http.post(this.addUrl,contact);
  }
  deleteContact(id : number) : Observable<any>{
    return this.http.delete(this.deleteUrl+id);
  }
  getContacts(){
    return this.http.get(this.getUrl)
  }
  editContacts(contact:Contact,id:number):Observable<any>{
    return this.http.put(this.editUrl+id,contact);
  }
  getContactById(id:number):Observable<any>{
    return this.http.get(this.getByIdUrl+id);
  }
  getStateById(id:number):Observable<any>{
    return this.http.get(this.getStateByIdUrl+id);
  }
}
