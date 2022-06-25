import { Component, Input } from '@angular/core';
import { Protocol } from 'src/app/models/protocol.model';

@Component({
  selector: 'app-protocol-card',
  templateUrl: './protocol-card.component.html',
  styleUrls: ['./protocol-card.component.scss'],
})
export class ProtocolCardComponent {
  @Input() item: Protocol;

}
