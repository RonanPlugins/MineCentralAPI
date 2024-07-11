export enum PLUGIN_SORTBY {
  LAST_UPDATE = "last_update",
  CREATED_DATE = "created_date",
  TITLE = "title",
}

export function getPluginSortTitle(filter: PLUGIN_SORTBY) {
  switch (filter) {
    case PLUGIN_SORTBY.LAST_UPDATE:
      return "Recently Updated";
    case PLUGIN_SORTBY.CREATED_DATE:
      return "Recently Published";
    case PLUGIN_SORTBY.TITLE:
      return "Alphabetical";
  }
}
