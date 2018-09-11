import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empSystem';

  // constructor(private route: ActivatedRoute, private router: Router) {
  //   const returnUrll = localStorage.getItem('Url');
  //   router.navigateByUrl(returnUrll);
  }

