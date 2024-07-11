export enum SERVER_SORTBY {
  LAST_BUMPED = "bumped",
  CREATED_DATE = "created_date",
  VOTES = "votes",
}

export function getServerSortTitle(filter: SERVER_SORTBY) {
  switch (filter) {
    case SERVER_SORTBY.LAST_BUMPED:
      return "Recently Bumped";
    case SERVER_SORTBY.CREATED_DATE:
      return "Created";
    case SERVER_SORTBY.VOTES:
      return "Votes";
  }
}
