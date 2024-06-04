import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItemDivider, IonText, IonCard, IonGrid, IonCol, IonRow, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonRow, IonCol, IonGrid, IonCard, IonText, IonItemDivider, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2Page {

  constructor() {}

}
