
import { IAnnouncement } from './state'
import * as announcementActions from './action'

export const initialState: IAnnouncement = {
  message: 'No announcement...'
}

export const reducer = (state = initialState, action) => {
  console.log('action :>> ', action);
  switch (action.type) {
    case announcementActions.UPDATE_ANNOUNCEMENT:
      return Object.assign({}, state, { message: action.message })
    default: return state
  }
}   