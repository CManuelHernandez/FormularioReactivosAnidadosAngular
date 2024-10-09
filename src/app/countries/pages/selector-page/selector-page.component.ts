import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit {
  public countriesByRegion: SmallCountry[] = [];

  private fb: FormBuilder = new FormBuilder();

  public myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    bordes: ['', [Validators.required]],
  });

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.onRegionChanged();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChanged(): void {
    this.myForm
      .get('region')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        switchMap((region) =>
          this.countriesService.getCountriesByRegion(region)
        )
        //switchMap(this.countriesService.getCountriesByRegion)
      )
      .subscribe((countries) => {
        this.countriesByRegion = countries;
      });
  }
}
