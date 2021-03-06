import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';

import { ClipboardModalComponent } from './components';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';
import { FileSizePipe } from './pipes';

import { CookieService } from 'ngx-cookie-service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { RemoteDesktopViewerComponent } from './remote-desktop-viewer/remote-desktop-viewer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { RemoteDesktopDashboardComponent } from './remote-desktop-dashboard/remote-desktop-dashboard.component';
import { JupyterhubComponent } from './jupyterhub/jupyterhub.component';
import { VirtualMachinesComponent } from './virtual-machines/virtual-machines.component';
import { HomeComponent } from './home/home.component';
import {NgxRemoteDesktopModule} from '@illgrenoble/ngx-remote-desktop';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ClipboardModalComponent,
    FileSizePipe,
    AppNavbarComponent,
    RemoteDesktopViewerComponent,
    DashboardComponent,
    RemoteDesktopDashboardComponent,
    JupyterhubComponent,
    VirtualMachinesComponent,
    HomeComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    NgxRemoteDesktopModule,
    HttpModule,
    HttpClientModule,
    MatSnackBarModule,
    CodemirrorModule,
    FormsModule,
    RouterModule.forRoot([]),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}, CookieService, HttpClientModule
  ],
  entryComponents: [
    ClipboardModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
