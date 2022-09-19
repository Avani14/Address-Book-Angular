import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray,FormControl } from '@angular/forms';
import cities from './cityAndState.json';
import { AddressBookServiceService } from '../../address-book-service.service';
import { Contact } from '../../contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
  address_form!: FormGroup;
  cities: Array<string> = cities.map((obj: any) => obj.name);
  states: Array<string> = cities.map((obj: any) => obj.state);
  contact: Contact = new Contact('', '', '', 0, '', '', '', 0);
  arrayOfCities : Array<string> = []
  id: any;
  stateFromForm : string='';
  constructor(
    private _fb: FormBuilder,
    private service: AddressBookServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.address_form = this._fb.group({
      firstName: [''],
      lastName: [''],
      mobileNo: [''],
      address: [''],
      city: [''],
      state: [''],
      zipNo: [''],
      emailId: [''],
      isUpdated:false
    });

    console.log(this.address_form.controls['isUpdated'].value);
    this.id = this.route.snapshot.params['id'];
     if (this.id !== null) {
       this.getIdOfUser(this.id);
    }
  }

  onSubmitHandler() {
    console.log(this.address_form);
    this.contact = new Contact(
      this.address_form.value.address,
      this.address_form.value.firstName,
      this.address_form.value.lastName,
      this.address_form.value.mobileNo,
      this.address_form.value.emailId,
      this.address_form.value.state,
      this.address_form.value.city,
      this.address_form.value.zipNo
    );
    if (this.address_form.controls['isUpdated'].value) {
      let response = this.service.editContacts(this.contact, this.id);
      response.subscribe((arg) => console.log(arg));
      alert('Details upated successfully');
      this.router.navigate(['/display']);
    }
    else {
      let response = this.service.addContact(this.contact);
      response.subscribe((arg) => console.log(arg));
      alert('Details added successfully');
      this.router.navigate(['/display']);
    }
  }
  get state(){
    return this.address_form.get('state')
  }
  get isUpdated() {
    return <FormArray>this.address_form.controls['isUpdated'];
  }
  resetForm() {
    this.address_form.reset();
  }
  get firstName() {
    return <FormArray>this.address_form.controls['firstName'];
  }
  getIdOfUser(id:number){
    if(id!= null){
    this.service.getContactById(this.id).subscribe((data) => {
      this.contact = data;
      this.setData(this.contact);
    });
  }
  else{
    console.log("This is new page");

  }
  }
  setData(contact: Contact) {
    this.address_form.controls['firstName'].setValue(contact.firstName);
    this.address_form.controls['lastName'].setValue(contact.lastName);
    this.address_form.controls['address'].setValue(contact.address);
    this.address_form.controls['city'].setValue(contact.city);
    this.address_form.controls['state'].setValue(contact.state);
    this.address_form.controls['mobileNo'].setValue(contact.mobileNo);
    this.address_form.controls['zipNo'].setValue(contact.zipNo);
    this.address_form.controls['emailId'].setValue(contact.emailId);
    this.address_form.controls['isUpdated'].setValue(true);
  }
  getState(obj:any) {
    if(obj.state === this.address_form.get('state')){
      console.log();
      return obj;
    }
  }
}
