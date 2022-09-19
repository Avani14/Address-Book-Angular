import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoURL = '../assets/address-book.png'
  constructor() { }

  ngOnInit(): void {
  }

}
