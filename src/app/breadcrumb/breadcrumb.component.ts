import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {
  @Input() pathSegments: string[] = []; // List of path segments
  breadcrumbs: { label: string, url: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateBreadcrumbs();
  }

  ngOnChanges(): void {
    this.updateBreadcrumbs();
  }

  updateBreadcrumbs(): void {
    // Start with the base breadcrumb for "Home"
    this.breadcrumbs = [{ label: 'PRODUCTS', url: '/products' }];

    let fullPath = '/products';
    this.pathSegments.forEach(segment => {
      fullPath += `/${segment}`;
      this.breadcrumbs.push({ label: this.formatLabel(segment), url: fullPath });
    });
  }

  // Format label to make it more user-friendly
  formatLabel(segment: string): string {
    return segment.replace(/_/g, ' ').toUpperCase(); // Replace underscores with spaces
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
