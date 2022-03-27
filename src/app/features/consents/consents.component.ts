import { Component, OnInit } from '@angular/core';
import { UserConsent } from '@core/models/consents/user-consent';
import { ConsentService } from '@core/services/consents.service';

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss'],
})
export class ConsentsComponent implements OnInit {
  public postedConsents: UserConsent[] = [];

  constructor(private consentService: ConsentService) {}

  ngOnInit(): void {
    this.postedConsents = this.consentService.getPostedConsent();
  }
}
