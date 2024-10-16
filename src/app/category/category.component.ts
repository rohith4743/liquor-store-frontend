import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  @Input() image: string = ''; // Path to the image
  @Input() label: string = ''; // Label for the category/subcategory
  @Input() navigationUrl: string = ''; // URL to navigate to

  constructor(private router: Router) {}

  navigateToCategory() {
    if (this.navigationUrl) {
      this.router.navigateByUrl(this.navigationUrl);
    }
  }

}
