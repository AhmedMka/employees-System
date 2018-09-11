import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../employees.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  item$;
  constructor(private empService: EmployeesService) {
    this.item$ = empService.getAll().snapshotChanges().map(changes => {
      return changes.map(c =>
        ({ key: c.payload.key,
           ...c.payload.val(),
        }));

    });  }

  ngOnInit() {
  }
  delete(key: string) {
    this.empService.deleteEmployee(key);
  }


}
