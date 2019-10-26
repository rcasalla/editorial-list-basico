import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
;
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from "./app.component";
import { EditorialModule } from "./editorial/editorial.module"


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false // return entity after PUT/update
    }),
    EditorialModule
  ],

  bootstrap: [AppComponent],

  providers: [InMemoryDataService]
})
export class AppModule {}
