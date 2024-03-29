import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from 'src/app/services/ui-style-toggle.service';

/**
 * Navbar component.
 * @class
 * @implements {OnInit}
 * @author Chad Wilson
 * @var {string} title - The title of the app.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'EdgyStack Dark Mode Template';
  darkmode: boolean = this.uiStyleToggleService.isDarkThemeSelected();

  constructor(private uiStyleToggleService: UiStyleToggleService) {}

  ngOnInit(): void {
  }

  toggleTheme() {
    this.uiStyleToggleService.toggle();
    this.darkmode = this.uiStyleToggleService.isDarkThemeSelected();
  }
}
