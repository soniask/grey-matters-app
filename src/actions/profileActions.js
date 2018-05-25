export const profileConstants = {
  SHOW_BOOKMARKS: 'SHOW_BOOKMARKS',
  SHOW_NOTES: 'SHOW_NOTES',
  SHOW_PRIVACY_POLICY: 'SHOW_PRIVACY_POLICY',
  HIDE_PRIVACY_POLICY: 'HIDE_PRIVACY_POLICY',
}

export const profileActions = {
  showBookmarks,
  showNotes,
  showPrivacyPolicy,
  hidePrivacyPolicy,
}

function showBookmarks() {
  return { type: profileConstants.SHOW_BOOKMARKS }
}

function showNotes() {
  return { type: profileConstants.SHOW_NOTES }
}

function showPrivacyPolicy() {
  return { type: profileConstants.SHOW_PRIVACY_POLICY }
}

function hidePrivacyPolicy() {
  return { type: profileConstants.HIDE_PRIVACY_POLICY }
}
