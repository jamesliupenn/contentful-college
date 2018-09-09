import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentfulService } from './contentful.service';
import { MarkdownModule } from 'ngx-markdown';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';

const routes: Routes = [
  // { path: '', redirectTo: '/lessons', pathMatch: 'full' },
  { path: '', component: ContentListComponent},
  { path: 'lessons/:slug', component: ContentDetailComponent},
  { path: 'courses/:slug', component: ContentDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule,
    MatIconModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot()
  ],
  // exports: [
  //   MatToolbarModule
  // ],
  providers: [
  	ContentfulService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
