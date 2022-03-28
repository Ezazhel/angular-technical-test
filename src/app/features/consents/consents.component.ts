import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserConsent } from '@core/models/consents/user-consent';
import { ConsentService } from '@core/services/consents.service';

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss'],
})
export class ConsentsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  public displayedColumns: string[] = ['name', 'email', 'consents'];
  public dataSource: MatTableDataSource<UserConsent> = new MatTableDataSource();
  constructor(private consentService: ConsentService) {}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.consentService.getUserConsents().subscribe((consents) => {
      this.dataSource.data = consents;
    });
  }
}
