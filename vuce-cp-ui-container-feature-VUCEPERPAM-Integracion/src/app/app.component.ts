import { Component, inject } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { SingleSpaService } from '../single-spa/single-spa.service';

@Component({
  selector: "vuce-container",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {

  private spaService = inject(SingleSpaService);

  urlLogo = this.spaService.assetUrl("images/logo-mincetur.svg");
  urlIso = this.spaService.assetUrl("images/iso-9001.svg");
}
