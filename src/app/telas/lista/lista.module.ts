import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { CategoryItemComponent } from 'src/app/components/category-item/category-item.component';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { ProtocolCardModule } from 'src/app/components/protocol-card/protocol-card-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
    ProtocolCardModule,
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
