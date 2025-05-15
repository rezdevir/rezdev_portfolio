import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CodingShapeHeaderComponent } from './components/coding-shape-header/coding-shape-header.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutComponent } from './components/about/about.component';
import { AboutPicShapeComponent } from './components/about-pic-shape/about-pic-shape.component';
import { Arrow1ShapeComponent } from './components/arrow1-shape/arrow1-shape.component';
import { SkillComponent } from './components/skill/skill.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { CvSectionComponent } from './components/cv-section/cv-section.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CodingShapeHeaderComponent,
    NavigationBarComponent,
    AboutComponent,
    AboutPicShapeComponent,
    Arrow1ShapeComponent,
    SkillComponent,
    SkillBarComponent,
    CvSectionComponent,
    CardViewComponent,
    ContactMeComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
