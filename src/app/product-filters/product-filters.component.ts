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
      ],
      "category" : "beer"
    },
    {
      "main": "brandy",
      "subcategories": [
        "brandy, cognac",
      ],
      "category" : "liquor"
    },
    {
      "main": "brandy",
      "subcategories": [
        "brandy, armagnac",
        "brandy, calvados",
        "brandy, pisco"
      ],
      "category" : "spirits"
    },
    {
      "main": "ciders & meads",
      "subcategories": [
        "ciders & meads, apple cider",
        "ciders & meads, melomel",
        "ciders & meads, pear cider",
        "ciders & meads, traditional mead"
      ],
      "category" : "other beverages"
    },
    {
      "main": "ciders & meads",
      "subcategories": [
        "ciders & meads, cider",
      ],
      "category" : "beer"
    },
    {
      "main": "dessert wine",
      "subcategories": ["dessert wine, ice wine"],
      "category" : "wine"
    },
    {
      "main": "fortified wine",
      "subcategories": [
        "fortified wine, madeira",
        "fortified wine, marsala",
        "fortified wine, port",
        "fortified wine, sherry"
      ],
      "category" : "wine"
    },
    {
      "main": "fruit-infused cider",
      "subcategories": ["fruit-infused cider"],
      "category" : "other beverages"
    },
    {
      "main": "gin",
      "subcategories": [
        "gin, flavored gin",
        "gin, london dry gin",
        "gin, navy strength gin",
        "gin, old tom gin"
      ],
      "category" : "spirits"
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
      ],
      "category" : "beer"
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
      ],
      "category" : "spirits"
    },
    {
      "main": "malbec",
      "subcategories": ["malbec"],
      "category" : "wine"
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
      ],
      "category" : "wine"
    },
    {
      "main": "rosé wines",
      "subcategories": [
        "rosé wines, pinot noir rosé",
        "rosé wines, provence rosé"
      ],
      "category" : "wine"
    },
    {
      "main": "rum",
      "subcategories": [
        "rum, dark rum",
        "rum, spiced rum",
        "rum, white rum"
      ],
      "category" : "liquor"
    },
    {
      "main": "sake",
      "subcategories": ["sake"],
      "category" : "spirits"
    },
    {
      "main": "soju",
      "subcategories": ["soju"],
      "category" : "spirits"
    },
    {
      "main": "sparkling wines",
      "subcategories": [
        "sparkling wines, cava",
        "sparkling wines, champagne",
        "sparkling wines, prosecco",
        "sparkling wines, sparkling rosé"
      ],
      "category" : "wine"
    },
    {
      "main": "specialty beers",
      "subcategories": [
        "specialty beers, berliner weisse",
        "specialty beers, fruit beer",
        "specialty beers, gose",
        "specialty beers, lambic"
      ],
      "category" : "beer"
    },
    {
      "main": "stouts & porters",
      "subcategories": [
        "stouts & porters, dry stout",
        "stouts & porters, imperial stout",
        "stouts & porters, milk stout",
        "stouts & porters, porter"
      ],
      "category" : "beer"
    },
    {
      "main": "tequila & mezcal",
      "subcategories": [
        "tequila & mezcal, añejo",
        "tequila & mezcal, blanco (silver)",
        "tequila & mezcal, extra añejo",
        "tequila & mezcal, reposado"
      ],
      "category" : "liquor"
    },
    {
      "main": "vodka",
      "subcategories": ["vodka, flavored vodka"],
      "category" : "liquor"
    },
    {
      "main": "wheat beers",
      "subcategories": [
        "wheat beers, american wheat beer",
        "wheat beers, hefeweizen",
        "wheat beers, witbier"
      ],
      "category" : "beer"
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
      ],
      "category" : "liquor"
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
      ],
      "category" : "wine"
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
