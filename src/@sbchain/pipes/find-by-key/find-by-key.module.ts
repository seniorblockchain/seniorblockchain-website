import { NgModule } from '@angular/core';
import { SBChainFindByKeyPipe } from '@sbchain/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        SBChainFindByKeyPipe
    ],
    exports     : [
        SBChainFindByKeyPipe
    ]
})
export class SBChainFindByKeyPipeModule
{
}
