export class paginationProps {
  /**
   *
   */
  constructor(
    private _page: number = 0,
    private _count: number,
    private _tableSize: number
  ) {}

  page = this._page;
  count = this._count;
  tableSize = this._tableSize;
}
