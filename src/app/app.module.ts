import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderModule, ContainerModule } from 'dv-component-library';
import { avNavbar } from 'dv-component-library';
import { avFormModule } from 'dv-component-library';
import { RouterModule } from '@angular/router';
import { InjectapiComponent } from './components/injectapi/injectapi.component';
import { InteractionComponent } from './components/communicationapi/interaction.component';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { MessageService } from 'dv-component-library';

@NgModule({
  declarations: [
    AppComponent,
    InjectapiComponent,
    InteractionComponent
  ],
  imports: [
    BrowserModule, HeaderModule, avNavbar, avFormModule, DragulaModule,
    ContainerModule, NgbModule.forRoot(), // Imported HeaderModule (from our component library)
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: 'Dynamic-Injection',
        component: InjectapiComponent
      },
      {
        path: 'ComponentInteraction',
        component: InteractionComponent
      }
    ])
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// installed dv-component-library by npm install 'path of dv-compnent'
// imported the component library just like any other module
// used the selector of each module as the attribute name in our html code of boiler plate
