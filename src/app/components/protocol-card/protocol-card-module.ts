import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProtocolCardComponent } from "./protocol-card.component";

@NgModule ({ 
    declarations: [ProtocolCardComponent],
    imports: [CommonModule],
    exports: [ProtocolCardComponent ]
})
export class ProtocolCardModule {}