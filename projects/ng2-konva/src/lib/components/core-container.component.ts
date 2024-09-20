/* eslint-disable @angular-eslint/no-output-native */
import { Component, forwardRef } from '@angular/core';
import { CoreShapeComponent } from './core-shape.component';
import { KO_CONTAINER_TOKEN } from './container.token';

@Component({
  selector: 'ko-layer, ko-fastlayer, ko-group',
  standalone: true,
  template: `<ng-content></ng-content>`,
  providers: [
    {
      provide: KO_CONTAINER_TOKEN,
      useExisting: CoreContainerComponent,
    },
  ],
})
export class CoreContainerComponent extends CoreShapeComponent {}
