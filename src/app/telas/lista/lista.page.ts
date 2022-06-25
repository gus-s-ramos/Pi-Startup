import { Component, OnInit } from '@angular/core';
import { IonLabel } from '@ionic/angular';
import { Category } from 'src/app/models/category.model';
import { Protocol } from 'src/app/models/protocol.model';
import { ProtocolService } from 'src/app/services/protocol.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  categories: Category[] = [];
  protocols: Protocol[] = [];

  constructor(private protocolService: ProtocolService) { }

  ngOnInit() {
    this.getCategories();
    this.protocols = this.protocolService.getProtocols();
  }

  getCategories() {
    this.categories = [
      {
        id:1,
        label:'All',
        image: 'assets/icon/pill.svg',
        active: true,
      },
      {
        id:2,
        label:'Categoria1',
        image: 'assets/icon/pill.svg',
        active: false,
      },
        
      {
        id:3,
        label:'Categoria2',
        image: 'assets/icon/pill.svg',
        active: false,
      },
      {
        id:4,
        label:'Categoria3',
        image: 'assets/icon/pill.svg',
        active: false,
      },
    ];
  }

}
