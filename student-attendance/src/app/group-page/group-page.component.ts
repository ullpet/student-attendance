import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';
import { ActivatedRoute, Router } from '@angular/router';
import { groupList } from '../shared/group-list';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrl: './group-page.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupPageComponent implements OnInit {
  public qrSource: string = '';
  public groupNumber?: string;

  private get groupId(): string {
    return this.activatedRoute.snapshot.params['groupNumber'];
  }

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.generateQRCode();
    this.getGroupNumber();
  }

  public navigateBack(): void {
    this.router.navigate(['./']);
  }

  private getGroupNumber(): void {
    this.groupNumber = groupList.find(
      (group) => group.id === this.groupId
    )?.number;
  }

  private generateQRCode(): void {
    const QROptions = {
      color: {
        dark: '#314692',
      },
    };

    QRCode.toDataURL(
      `http://yualpetrov.temp.swtest.ru`,
      QROptions,
      (err, url) => {
        this.qrSource = url;
      }
    );
  }
}
