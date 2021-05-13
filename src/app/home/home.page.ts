import { Component } from '@angular/core';
import { Contact } from '../model/Contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Bookings = [];

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.contactService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Contact);
      })
    })
  }

  fetchBookings() {
    this.contactService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBooking(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.contactService.deleteBooking(id)
    }
  }
}
