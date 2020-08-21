import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ReportarComponent } from './reportar/reportar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { DecoyComponent } from './decoy/decoy.component';
import { OlvideContrasenaComponent } from './olvide-contrasena/olvide-contrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    IndexComponent,
    InformacionComponent,
    ReportarComponent,
    NosotrosComponent,
    AyudaComponent,
    RegistroComponent,
    LoginComponent,
    DecoyComponent,
    OlvideContrasenaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'index', component: IndexComponent},
      {path: 'informacion', component: InformacionComponent},
      {path: 'reportar', component: ReportarComponent},
      {path: 'nosotros', component: NosotrosComponent},
      {path: 'ayuda', component: AyudaComponent},
      {path: 'registro', component: RegistroComponent},
      {path: 'login', component: LoginComponent},
      {path: 'decoy', component: DecoyComponent},
      {path: 'olvide-contrasena', component: OlvideContrasenaComponent},
      {path: '', redirectTo: '/index', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
