import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Stat } from '../../models/stat.interface';

@Component({
  selector: 'app-tesla-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tesla-stats.component.html',
  styleUrls: ['./tesla-stats.component.scss']
})
export class TeslaStatsComponent implements OnInit {
  @Input() stats: Stat[];
  constructor() { }

  ngOnInit() {
  }

}
