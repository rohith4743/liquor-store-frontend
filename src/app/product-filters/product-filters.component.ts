import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.css'
})
export class ProductFiltersComponent {

  @Output() filtersChanged = new EventEmitter<any>(); 
  @Input() category : string | undefined;
  @Input() subcategory: string | undefined;

  // filterForm: FormGroup;
  categories = ['wine', 'beer', 'spirits', 'liquor', 'other beverages'];
  countries = ['France', 'Italy', 'USA']; 
  sizes = ['50ml', '100ml', '200ml'];

  // Subcategory list structured under their main categories and sorted alphabetically
  subcategories = [
    {
      "main": "ales",
      "subcategories": [
        "ales, amber ale",
        "ales, barleywine",
        "ales, belgian ale",
        "ales, belgian white",
        "ales, brown ale",
        "ales, ipa",
        "ales, pale ale",
        "ales, saison"
      ]
    },
    {
      "main": "brandy",
      "subcategories": [
        "brandy, armagnac",
        "brandy, calvados",
        "brandy, cognac",
        "brandy, pisco"
      ]
    },
    {
      "main": "ciders & meads",
      "subcategories": [
        "ciders & meads, apple cider",
        "ciders & meads, cider",
        "ciders & meads, melomel",
        "ciders & meads, pear cider",
        "ciders & meads, traditional mead"
      ]
    },
    {
      "main": "dessert wine",
      "subcategories": ["dessert wine, ice wine"]
    },
    {
      "main": "fortified wine",
      "subcategories": [
        "fortified wine, madeira",
        "fortified wine, marsala",
        "fortified wine, port",
        "fortified wine, sherry"
      ]
    },
    {
      "main": "fruit-infused cider",
      "subcategories": ["fruit-infused cider"]
    },
    {
      "main": "gin",
      "subcategories": [
        "gin, flavored gin",
        "gin, london dry gin",
        "gin, navy strength gin",
        "gin, old tom gin"
      ]
    },
    {
      "main": "lagers",
      "subcategories": [
        "lagers, amber lager",
        "lagers, dark lager",
        "lagers, ice beer",
        "lagers, light beer",
        "lagers, pale lager",
        "lagers, pilsner",
        "lagers, vienna lager"
      ]
    },
    {
      "main": "liqueur",
      "subcategories": [
        "liqueur, absinthe",
        "liqueur, amaretto",
        "liqueur, anise",
        "liqueur, aperitif",
        "liqueur, cherry",
        "liqueur, cinnamon",
        "liqueur, coffee",
        "liqueur, cream",
        "liqueur, curacao",
        "liqueur, elderflower",
        "liqueur, hazelnut",
        "liqueur, herbal",
        "liqueur, lemon",
        "liqueur, mint",
        "liqueur, orange",
        "liqueur, peach",
        "liqueur, sambuca"
      ]
    },
    {
      "main": "malbec",
      "subcategories": ["malbec"]
    },
    {
      "main": "red wines",
      "subcategories": [
        "red wines, barbera",
        "red wines, cabernet sauvignon",
        "red wines, malbec",
        "red wines, merlot",
        "red wines, pinot noir",
        "red wines, sangiovese",
        "red wines, shiraz/syrah",
        "red wines, tempranillo",
        "red wines, zinfandel"
      ]
    },
    {
      "main": "rosé wines",
      "subcategories": [
        "rosé wines, pinot noir rosé",
        "rosé wines, provence rosé"
      ]
    },
    {
      "main": "rum",
      "subcategories": [
        "rum, dark rum",
        "rum, spiced rum",
        "rum, white rum"
      ]
    },
    {
      "main": "sake",
      "subcategories": ["sake"]
    },
    {
      "main": "soju",
      "subcategories": ["soju"]
    },
    {
      "main": "sparkling wines",
      "subcategories": [
        "sparkling wines, cava",
        "sparkling wines, champagne",
        "sparkling wines, prosecco",
        "sparkling wines, sparkling rosé"
      ]
    },
    {
      "main": "specialty beers",
      "subcategories": [
        "specialty beers, berliner weisse",
        "specialty beers, fruit beer",
        "specialty beers, gose",
        "specialty beers, lambic"
      ]
    },
    {
      "main": "stouts & porters",
      "subcategories": [
        "stouts & porters, dry stout",
        "stouts & porters, imperial stout",
        "stouts & porters, milk stout",
        "stouts & porters, porter"
      ]
    },
    {
      "main": "tequila & mezcal",
      "subcategories": [
        "tequila & mezcal, añejo",
        "tequila & mezcal, blanco (silver)",
        "tequila & mezcal, extra añejo",
        "tequila & mezcal, reposado"
      ]
    },
    {
      "main": "vodka",
      "subcategories": ["vodka, flavored vodka"]
    },
    {
      "main": "wheat beers",
      "subcategories": [
        "wheat beers, american wheat beer",
        "wheat beers, hefeweizen",
        "wheat beers, witbier"
      ]
    },
    {
      "main": "whiskey",
      "subcategories": [
        "whiskey, bourbon",
        "whiskey, irish whiskey",
        "whiskey, japanese whisky",
        "whiskey, rye whiskey",
        "whiskey, scotch whisky",
        "whiskey, tennessee whiskey"
      ]
    },
    {
      "main": "white wines",
      "subcategories": [
        "white wines, chardonnay",
        "white wines, chenin blanc",
        "white wines, gewürztraminer",
        "white wines, moscato",
        "white wines, pinot grigio",
        "white wines, riesling",
        "white wines, sauvignon blanc",
        "white wines, viognier",
        "white wines, white zinfandel"
      ]
    }
  ];  


  ngOnInit(): void {
    if (this.category) {
      this.filterForm.patchValue({ category: this.category });
    } else {
      this.filterForm.patchValue({ category: "" });
    }
    if (this.subcategory) {
      this.filterForm.patchValue({ subcategory: this.subcategory });
    } else {
      this.filterForm.patchValue({ subcategory: "" });
    }
  }

  ngOnChanges(): void {
    if (this.category) {
      this.filterForm.patchValue({ category: this.category });
    } else {
      this.filterForm.patchValue({ category: "" });
    }
    if (this.subcategory) {
      this.filterForm.patchValue({ subcategory: this.subcategory });
    } else {
      this.filterForm.patchValue({ subcategory: "" });
    }
  }

  filterForm = new FormGroup({
    category: new FormControl(''),
    subcategory: new FormControl(''),
    country: new FormControl(''),
    size: new FormControl(''),
    minPrice: new FormControl(''),
    maxPrice: new FormControl(''),
    onSale: new FormControl(false),
    minAbv: new FormControl(),
    maxAbv: new FormControl()
  });

  emitvalue() {
    this.filtersChanged.emit(this.filterForm.value);
  }
}
