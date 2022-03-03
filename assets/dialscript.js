const { pointer, transform, calc, value, css, physics, trackOffset } = window.popmotion;
const { angle } = calc;
const { pipe, wrap, snap } = transform;

const dial = document.querySelector('.dial');
const dialRenderer = css(dial);
const dialRotation = value(0, v => dialRenderer.set('rotate', v));
var outputValue;
var htmlOutputValue = document.getElementById('changeThis');


function startTracking(e) {
  e.preventDefault();
  const pointerAngle = pointer(e, {
    transform: v => {
      const dialPos = dial.getBoundingClientRect();
      const dialCenter = {
        x: dialPos.left + dialPos.width / 2,
        y: dialPos.top + dialPos.height / 2 };

      const angleFromCenter = angle(dialCenter, v);

      return angleFromCenter;
    } }).
  start();

  trackOffset(pointerAngle, {
    from: dialRotation.get(),
    transform: pipe(
    wrap(0, 360),
    snap([0, 45, 90, 135, 180, 225, 270, 315, 360])),
/*0 = 25,      snap([25, 80, 108, 164, 220, 274, 330, 360])),
 */
    onUpdate: dialRotation,
    onStop: () => pointerAngle.stop() }).
  start();
}

function stopTracking() {
  dialRotation.stop();
  document.getElementById('changeThis').innerHTML = dialRotation.get();

  if (dialRotation.get() == 45)   {  activateOne()}
  if (dialRotation.get() == 90)  {  activateTwo()}
  if (dialRotation.get() == 135)  {  activateThree()}
  if (dialRotation.get() == 180)   {activateFour()}

}

dial.addEventListener('mousedown', startTracking);
dial.addEventListener('touchstart', startTracking, { passive: false });
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);