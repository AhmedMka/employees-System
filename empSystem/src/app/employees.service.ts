import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

   create(product) { return this.db.list('/employees').push(product); }

  getGender() {return this.db.list('/gender'); }

   getAll() { return this.db.list('/employees'); }

  getEmployeeById(key: string) {
    this.employees = this.db.object('/employees/' + key);
    return this.employees; }

  update(employeeId, employee) { return this.db.object('/employees/' + employeeId).update(employee); }

  deleteEmployee($key: string) { return this.db.object('/employees/' + $key).remove(); }
}
