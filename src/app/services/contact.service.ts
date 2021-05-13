import { Injectable } from '@angular/core';
import { Contact } from '../model/Contact';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(contact: Contact) {
    return this.bookingListRef.push({
      name: contact.name,
      email: contact.email,
      mobile: contact.mobile
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/contact/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/contact');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, contact: Contact) {
    return this.bookingRef.update({
      name: contact.name,
      email: contact.email,
      mobile: contact.mobile
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/contact/' + id);
    this.bookingRef.remove();
  }
}
