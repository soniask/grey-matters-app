export const searchConstants = {
  SHOW_SORT_OPTIONS: 'SHOW_SORT_OPTIONS',
  SHOW_FILTER_OPTIONS: 'SHOW_FILTER_OPTIONS',
}

export const searchActions = {
  toggleSortOptions,
  toggleFilterOptions,
}

function toggleSortOptions(show = true) {
  return {type: searchConstants.SHOW_SORT_OPTIONS, show}
}

function toggleFilterOptions(show = true) {
  return {type: searchConstants.SHOW_FILTER_OPTIONS, show}
}
