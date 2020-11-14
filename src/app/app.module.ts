import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginTeacherComponent } from './components/login-teacher/login-teacher.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { CargaComponent } from './components/carga/carga.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    LoginTeacherComponent,
    TeachersComponent,
    AsignaturaComponent,
    CargaComponent,
    CalificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
