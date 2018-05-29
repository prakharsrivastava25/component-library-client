import {
  Component, OnInit, ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  ChangeDetectorRef,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-injectapi',
  templateUrl: './injectapi.component.html',
  styleUrls: ['./injectapi.component.css']
})
export class InjectapiComponent implements OnInit {
  @ViewChild('formContainer', { read: ViewContainerRef }) container: any;
  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver) {
    console.log("app-injectapi constructor");
  }
  ngOnInit() {
  }

  injectComponent(eventData) {
    this.container.clear();
    console.log('eventData:', eventData, 'eventData: ', typeof(eventData));
    const injectableComponents = JSON.parse(eventData.toString());
    console.log('injectableComponents', injectableComponents, 'injectableComponents-type', typeof(injectableComponents));
    const factories = Array.from(this.resolver['_factories'].keys());
    // console.log('factories:', factories);
    // console.log('AvCheckboxesComponent:', AvCheckboxesComponent);
    injectableComponents.forEach(element => {
      const factoryClass: any = factories.find((x: any) => x.name === element.componentType);
      // console.log('factoryClass-type:', typeof (factoryClass));
      const factory = this.resolver.resolveComponentFactory(factoryClass);
      this.componentRef = this.container.createComponent(factory);
      console.log('this.componentRef.instance:', this.componentRef.instance);
      // this.componentRef.instance.checkboxProp = element.checkboxProp;
      this.componentRef.instance[element.checkboxPropertyName] = element[element.checkboxPropertyName];
      // this.componentRef.instance.find((a: any) => x.name === element.componentType) = element.checkboxProp;
    });
  }

}
