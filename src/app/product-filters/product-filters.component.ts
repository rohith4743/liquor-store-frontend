import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.css'
})
export class ProductFiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<any>(); // Emit changes to the parent component

  filterForm: FormGroup;
  categories = ['wine', 'beer', 'spirits']; // Example categories
  subcategories = ['sparkling wine', 'red wine', 'white wine', 'prosecco']; // Example subcategories
  countries = ['France', 'Italy', 'USA']; // Example countries
  sizes = ['50ml', '100ml', '200ml']; // Example sizes

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      category: [''],
      subcategory: [''],
      country: [''],
      size: [''],
      minPrice: [''],
      maxPrice: [''],
      onSale: [false],
      minAbv: [''],
      maxAbv: ['']
    });
  }

  ngOnInit(): void {
    // Emit form changes to the parent component
    this.filterForm.valueChanges.subscribe((formValues) => {
      this.filtersChanged.emit(formValues);
    });
  }
}
