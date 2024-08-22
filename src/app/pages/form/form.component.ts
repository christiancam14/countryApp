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
  error: boolean = false;

  constructor(private countryService: CountryService) {}

  handleSubmit() {
    if (this.country.length === 0) {
      alert('Por favor ingrese el nombre de un país');
      return;
    }

    this.countryService.getCountryInfo(this.country).subscribe(
      (countryResp) => {
        this.error = false;
        this.countryInfo = countryResp;
      },
      (error) => {
        this.countryInfo = null;
        this.error = true;
      }
    );
  }
}
