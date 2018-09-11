import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../employees.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  gender$: Observable<any[]>;
  employee = {};
  id;

  constructor(private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
    private empService: EmployeesService) {
    this.gender$ = this.empService.getGender().valueChanges();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.empService.getEmployeeById(this.id)
        .valueChanges()
        .subscribe(em => this.employee = em);
  }   }

  ngOnInit() {
  }

  save(employee) {
    if (this.id) {
      this.empService.update(this.id, employee);
     } else { this.empService.create(employee); }
    this.router.navigate(['/employeesList']);
  }
}
