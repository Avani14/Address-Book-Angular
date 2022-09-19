import { Component, OnInit } from '@angular/core';
import { AddressBookServiceService } from '../../address-book-service.service';
import { Contact } from '../../contact'
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  addressList :any;
  constructor(private service : AddressBookServiceService) { }

  ngOnInit(): void {
    this.service.getContacts().subscribe(arg =>this.addressList = arg);
  }
  deleteEmployees(id:number){
    this.service.deleteContact(id).subscribe(arg => console.log(arg));
    window.location.reload()
  }
  displayedColumns = ['first_name','address','state','zip','city','mobile_number','actions']
}
