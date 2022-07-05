import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app
  .load("https://prod.spline.design/C8v5wKSdTmx0JFF1/scene.splinecode")
  .then(() => {
    setTimeout(animationCube, 2000);
  });

function animationCube() {
  console.log("start anim");
  const obj = spline.findObjectById("908e4bcc-4410-49e2-85a6-230d2c4fcd79");
  objectToAnimate.emitEvent("mouseDown");
}
