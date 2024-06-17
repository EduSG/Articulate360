function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6htAKtUbWVZ":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5ufIpJ1ctzr');
const duration = 3750;
const easing = 'ease-out';
const id = '5omnXIJ4MyE';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
