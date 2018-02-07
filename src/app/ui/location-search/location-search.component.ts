import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search/search.service';
import { PredictiveSearchComponent } from '../predictive-search/predictive-search.component';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss'],
  providers: [ SearchService ]
})
export class LocationSearchComponent {
  @Input() placeholder;
  /** Emits a location whenever one is selected in the search */
  @Output() locationSelected = new EventEmitter();

  constructor(public search: SearchService) { }

  /**
   * Adds the corresponding layerId to the feature
   * @param feature
   */
  onSearchSelect(data) {
    if (data.selection) {
      this.locationSelected.emit({ feature: data.selection, queryTerm: data.queryTerm });
    }
  }
}
