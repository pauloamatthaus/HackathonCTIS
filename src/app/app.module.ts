import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, LottieAnimationViewModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
