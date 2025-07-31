import {Component, inject} from '@angular/core';
import {LoadingService} from '../../services/loading-service';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.scss'
})
export class Loading {
  private _loadingService = inject(LoadingService);

  loading = this._loadingService.loading;

}
