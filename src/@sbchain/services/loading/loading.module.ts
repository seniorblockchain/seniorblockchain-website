import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SBChainLoadingInterceptor } from '@sbchain/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: SBChainLoadingInterceptor,
            multi   : true
        }
    ]
})
export class SBChainLoadingModule
{
}
