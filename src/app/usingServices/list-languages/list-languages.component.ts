import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language.service';

// @ts-ignore
@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.css']
})
export class ListLanguagesComponent implements OnInit {
  private languages = [];
  private errorMessage = '';

  constructor(private languageService: LanguageService) {
  }

  ngOnInit() {
    this.languageService.getLanguages()
      .subscribe(
        data => this.languages = data,
        error => this.showErrorMessage(error)
      );
  }

  showErrorMessage(error) {
    console.log(error);
    this.errorMessage = error.message;
  }


}
