export const profileConstants = {
  SHOW_BOOKMARKS: 'SHOW_BOOKMARKS',
  SHOW_NOTES: 'SHOW_NOTES',
}

export const profileActions = {
  showBookmarks,
  showNotes,
}

function showBookmarks() {
  return {type: profileConstants.SHOW_BOOKMARKS,}
}

function showNotes() {
  return {type: profileConstants.SHOW_NOTES,}
}
