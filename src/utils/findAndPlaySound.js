export const findAndPlaySound = pad => {
  const sound = document.getElementById(pad.id);
  if (sound !== undefined) {
    sound.currentTime = 0;
    sound.play();
  }
  return;
};
