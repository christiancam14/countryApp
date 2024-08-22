import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/config/interfaces/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [],
})
export class FormComponent {
  country: string = '';
  countryInfo: Country | null = null;

  constructor(private countryService: CountryService) {}

  handleSubmit() {
    this.countryService.getCountryInfo(this.country).subscribe(
      (data) => {
        this.countryInfo = data; // Asignar directamente el objeto Country
        console.log(data);
      },
      (error) => {
        this.countryInfo = null;
      }
    );
  }
}
