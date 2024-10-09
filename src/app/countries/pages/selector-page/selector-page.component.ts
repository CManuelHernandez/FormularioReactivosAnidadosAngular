import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit {
  private fb: FormBuilder = new FormBuilder();

  public myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    bordes: ['', [Validators.required]],
  });

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.onRegionChange();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChange(): void {
    this.myForm.get('region')!.valueChanges.subscribe((region) => {
      console.log({ region });
    });
  }
}
