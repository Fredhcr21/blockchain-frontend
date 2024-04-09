import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EthValueComponent } from './eth-value/eth-value.component';
import { EthHeaderComponent } from './eth-header/eth-header.component';
import { EthBlockComponent } from './eth-block/eth-block.component';
import { BlockDescriptionComponent } from './block-description/block-description.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterSupportComponent } from './footer-support/footer-support.component';
import { EthComponent } from './eth.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EthValueComponent,
    EthHeaderComponent,
    EthBlockComponent,
    BlockDescriptionComponent,
    FooterSupportComponent,
    EthComponent,
  ],
  imports: [
    InlineSVGModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      { path: 'block', component: EthComponent },
      { path: '**', redirectTo: 'block' },
    ]),
  ],
})
export class EthModule {}
