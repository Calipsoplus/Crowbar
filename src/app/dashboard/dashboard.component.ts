import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Virtualmachine } from '../models/virtualmachine';
import { VirtualmachineService } from '../virtualmachine.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  machines: Virtualmachine[] = [];
  user = '';

  constructor(private virtualMachineService: VirtualmachineService,
              private router: Router,
              private cookieService: CookieService,
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {

    if (this.cookieService.check(environment.COOKIE_USER)) {
      console.log('Calipso user: ', this.cookieService.get(environment.COOKIE_USER));
      this.user = this.cookieService.get(environment.COOKIE_USER);
    } else {
      this.document.location.href = environment.AUTH_URL;
    }

    this.getVirtualMachines();
  }

  getVirtualMachines(): void {
    this.virtualMachineService.getVirtualMachines().subscribe(machines => this.machines = machines);
  }

  btnclick(ip) {
    console.log(ip);
    this.router.navigate(['/{{}}', ip]);
  }

}
