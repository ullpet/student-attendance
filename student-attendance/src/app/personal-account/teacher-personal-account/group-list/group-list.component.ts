import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { groupFilters } from './group-filters';
import { groupList } from './group-list';
import { Group } from './group';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupListComponent {
  public filters = new FormControl([]);
  public search = new FormControl('');
  public groupFilters = groupFilters;
  public groupList: Group[] = groupList;

  constructor(private readonly router: Router) {}

  public getCourseData(group: Group): string {
    return `${group.course} курс`;
  }

  public navigateToGroupPage(): void {
    this.router.navigate(['/group']);
  }
}
