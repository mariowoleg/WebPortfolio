import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { EducationComponent } from './education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactMeComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webportfolio';
}
