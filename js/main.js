/**
 * Created by lene on 2/23/14.
 */
var stage = new createjs.Stage("stage");
var text = new createjs.Text("Firefox OS", "30px Arial", "#ff7700");

text.x = 0;
text.y = 0;

var tween = createjs.Tween.get(text)
  .to({x:text.x + 120}, 800, createjs.Ease.bounceOut)
  .wait(500)
  .to({y:text.y + 120}, 800, createjs.Ease.bounceOut)
  .wait(500)
  .to({x:text.x + 70}, 800, createjs.Ease.bounceOut)
  .wait(500)
  .to({y:text.y + 70}, 800, createjs.Ease.bounceOut)
  .wait(500)
  .to({alpha:0,visible:false}, 1000);
//.call(console.log, ["done"], console);

stage.addChild(text);
//  stage.update();

createjs.Ticker.addEventListener("tick", stage);
//  function handleTick() {
//    stage.update();
//  }
