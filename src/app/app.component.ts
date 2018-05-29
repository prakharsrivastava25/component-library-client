import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'dv-component-library';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService],
})
export class AppComponent implements OnInit{
  
  ngOnInit() {
    //     this.subscription = messageService.subscribe('sidenav', (payload) => {
    //  console.log("PAYLOAD : from app.component.ts of DV REPORTING");
    //  console.log(payload);
    //  this.router.navigate(['/',payload]).then((nav)=>{
    //    console.log("routing success "+nav); 
    //   },(error)=>{
    //     console.log("error: "+error); 
    //   });
    // });
  }

  
  title = 'dvReporting';
  mobHeight: any;
  mobWidth: any;
  isMobile: any;
  menuControlValue: boolean = true;

  public isCollapsed = true;
  private subscription: Subscription;
  constructor(private router: Router,private activeroute: ActivatedRoute,messageService:MessageService) {

    //    messageservice.print();
//Subscribe starts here
    this.subscription = messageService.subscribe('sidenav', (payload) => {
     console.log("PAYLOAD : from app.component.ts of DV REPORTING");
     console.log(">>>>>>>",payload);
     this.router.navigate(['/',payload]).then((nav)=>{
       console.log("routing success "+nav); 
      },(error)=>{
        console.log("error: "+error); 
      });
    });
//Subscribe ends here


    // calculating screen resolution using DOM WINDOW object
    this.mobHeight = (window.screen.height) + "px";
    this.mobWidth = (window.screen.width) + "px";


    // to check whether the application is opened in one of the mentioned
    // mobile devices or not
    this.isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ?
      navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)[0] :
      'Not a Mobile Browser';

    // using navigator.userAgent property of WINDOW object to determent WebKit Compatability
    console.log("userAgent: ",window.navigator.userAgent);
  }

  dataInput : Array<Object> = [{
    "name": "Dynamic-Injection",
    "categories": [{
        "name": "ViewOne",
        "categories": []
    }]
}, {
    "name": "ComponentInteraction",
    "categories": []
}, {
    "name": "Base3x",
    "categories": [{
        "name": "Design",
        "categories": [{
            "name": "ComponentCreation",
            "categories": [{
                "name": "SimpleComponents",
                "categories": [{
                    "name": "DerivedComponents",
                    "categories": []
                }]
            }, {
                "name": "ComplexComponent",
                "categories": []
            }]
        }]
    }]
}, {
    "name": "IDE-Tooling",
    "categories": []
}];
  
  eventReceived(bubbledEvent){
    console.log("Event received at DV-Reporting app.components.ts is: "+bubbledEvent);
        // this.router.navigate(['/',bubbledEvent]).then((nav)=>{
        //   console.log("routing success "+nav); 
        // },(error)=>{
        //   console.log("error: "+error); 
        // });
  }
  // checkboxProp = [{
  //   groupLabel: "Sample checkbo group",
  //   groupData: [
  //     { 'labelName': "checkbox 1" }, { 'labelName': "checkbox 2" },
  //     { 'labelName': "checkbox 3" }
  //   ]
  // },
  // {
  //   groupLabel: "Sample checkbox group 2",
  //   groupData: [
  //     { 'labelName': "checkbox 1" }, { 'labelName': "checkbox 2" },
  //     { 'labelName': "checkbox 3" }
  //   ]
  //   }]


}
