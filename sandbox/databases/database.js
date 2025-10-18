function getUserId() {
  return Promise.resolve(101);
}


const returnUserPreferences = async () = {
  try {
    await Promise.resolve({ userId, theme: 'light', fontSize: 'medium' });
  } catch (err) {
    return Promise.reject('Failed to load preferences');
  }
}


getUserId()
  

console.log('Code finished running!');