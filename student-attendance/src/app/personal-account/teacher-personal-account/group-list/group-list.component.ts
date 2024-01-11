import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GroupFilter, groupFilters } from './group-filters';
import { groupList } from '../../../shared/group-list';
import { Group } from './group';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { TuiDestroyService, TuiIdentityMatcher } from '@taiga-ui/cdk';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.less',
  providers: [TuiDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupListComponent implements OnInit {
  public filters = new FormControl([]);
  public search = new FormControl('');
  public groupFilters = groupFilters;
  public groupList: Group[] = groupList;
  public filteredGroupList: Group[] = this.groupList;

  constructor(
    private readonly router: Router,
    private readonly destroy$: TuiDestroyService
  ) {}

  ngOnInit(): void {
    this.initSearchChanges();
    this.initFilterChanges();
  }

  public getCourseData(group: Group): string {
    return `${group.course} курс`;
  }

  public navigateToGroupPage(groupId: string): void {
    this.router.navigate([`/group/${groupId}`]);
  }

  public identityMatcher: TuiIdentityMatcher<GroupFilter> = (
    group1: GroupFilter,
    group2: GroupFilter
  ) => group1.title === group2.title;

  public resetFilter(): void {}

  private initSearchChanges(): void {
    this.search.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((searchValue) => {
        this.filters.reset([], { emitEvent: false });

        if (!searchValue) {
          this.filteredGroupList = this.groupList;

          return;
        }

        this.filteredGroupList = this.groupList.filter((group) =>
          group.number.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
  }

  private initFilterChanges(): void {
    this.filters.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((filterValue: GroupFilter[] | null) => {
        this.search.reset('', { emitEvent: false });

        if (!filterValue?.length) {
          this.filteredGroupList = this.groupList;

          return;
        }

        this.filteredGroupList = this.groupList.filter((group) =>
          filterValue.some((filter) => filter.number === group.course)
        );
      });
  }
}
