import { Component } from "@angular/core";
import { ScreenOrientation } from "@ionic-enterprise/screen-orientation/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private screen: ScreenOrientation) {}

  public lock() {
    this.screen.lock("portrait");
  }

  public unlock() {
    this.screen.unlock();
  }
}
