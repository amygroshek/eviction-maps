import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search/search.service';
import { PredictiveSearchComponent } from '../predictive-search/predictive-search.component';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss'],
  providers: [ SearchService ]
})
export class LocationSearchComponent {
  /** Emits a location whenever one is selected in the search */
  @Output() locationSelected = new EventEmitter();

  constructor(public search: SearchService) { }

  /**
   * Adds the corresponding layerId to the feature
   * @param feature
   */
  onSearchSelect(feature) {
    if (feature) {
      feature.properties['layerId'] =
        this.search.getLayerName(feature.properties['layer']);
      this.locationSelected.emit(feature);
    }
  }
}
