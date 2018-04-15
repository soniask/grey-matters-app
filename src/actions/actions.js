export const actionConstants = {
  SHOW: 'SHOW_MENU'
}

export const actions = {
  showMenu
}

function showMenu(show = true) {
  return {type: actionConstants.SHOW, show}
}
