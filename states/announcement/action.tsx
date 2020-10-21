export const UPDATE_ANNOUNCEMENT = '[Announcement] update'

// Action Creators
export function updateAnnouncement(message: string) {
  return {
      type: UPDATE_ANNOUNCEMENT,
      message
  };
}




