import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


export const GTE_MOCK_DATA_URL = './assets/mock-data.json';
export const GTE_DATA_URL = 'http://test.api.logos.bg/api/getinfo/getinfo';
export const MAIN_URL = 'http://test.api.logos.bg/';
export const APP_URL = 'http://test.logos.bg/gte;';
// export const APP_URL = 'http://abv.bg';

@Injectable()
export class DataService {

  homeTitle: string;
  homeInformation: string;
  homeVideoURL: string;

  docsTitle: string;
  docsInformation: string;
  docsMenu:any;

  aboutGTETitle: string;
  aboutGTEInformation: string;
  aboutContributorsTitle: string;
  aboutContributorsInformation: Array<any>;
  aboutPublicationsTitle: string;
  aboutPublicationsInformation: Array<any>;

  constructor(private http: HttpClient) {
    this.getData()
      .subscribe(
        (data) => {
          console.log(data);
          this.homeTitle = data.home_title;
          this.homeInformation = data.home_information;
          this.homeVideoURL = MAIN_URL+data.home_video_file;

          this.docsTitle = data.docs_title;
          this.docsInformation = data.docs_information;

          this.aboutGTETitle = data.about_GTE_title;
          this.aboutGTEInformation = data.about_GTE_information;
          this.aboutContributorsTitle = data.about_contributors_title;
          this.aboutContributorsInformation = data.about_contributors_information;
          this.aboutPublicationsTitle = data.about_publications_title;
          this.aboutPublicationsInformation = data.about_publications_information;
          this.docsMenu = data.docs_menu;
        },
        (error) => {
          console.log(error);
        });
  }

  getData(): Observable<any> {
    return this.http.get(GTE_DATA_URL);
  }
}
