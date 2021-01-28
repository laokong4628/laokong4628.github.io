/* 控制台输出 */
if (window.console) {
  var cons = console;
  if (cons) {
    cons.group("O(∩_∩)O哈喽！");
    cons.info("这位看代码的童鞋，不如留下你的友链来一起玩耍吧！");
    cons.log("%cYulin Lewis's Blog", "background-image: linear-gradient(#063053, #395873, #5c7c99);font-size: 2rem;");
    cons.info("==============================此乃分界线==============================");
    cons.log(
      "  █████▒█    ██  ▄████▄   ██ ▄█▀       ██████╗ ██╗   ██╗ ██████╗\n▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒        ██╔══██╗██║   ██║██╔════╝\n▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░        ██████╔╝██║   ██║██║  ███╗\n░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄        ██╔══██╗██║   ██║██║   ██║\n░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄       ██████╔╝╚██████╔╝╚██████╔╝\n ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒       ╚═════╝  ╚═════╝  ╚═════╝\n ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░\n ░ ░    ░░░ ░ ░ ░        ░ ░░ ░\n          ░     ░ ░      ░  ░\n"
    );
    cons.groupEnd();
  }
}

/* 轮播背景图片 */
$(function () {
  $.backstretch(
    [
      "/images/background/pexels-eberhard.jpg",
      "/images/background/pexels-fox.jpg",
      "/images/background/pexels-martin.jpg",
      "/images/background/pexels-sohail.jpg",
      "/images/background/pexels-warren.jpg",
    ],
    { duration: 60000, fade: 1500 }
  );
});

/* 拉姆蕾姆回到顶部或底部按钮 */
$(function () {
  $("#lamu img")
    .eq(0)
    .click(function () {
      $("html,body").animate({ scrollTop: $(document).height() }, 800);
      return false;
    });
  $("#leimu img")
    .eq(0)
    .click(function () {
      $("html,body").animate({ scrollTop: 0 }, 800);
      return false;
    });
});

/* 返回随机颜色 */
function randomColor() {
  return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")";
}

/* 后置加载页面组件的背景图片 */
$(function () {
  /* 首页头像div加载GitHub Chart作为背景图片 */
  $("div.home-avatar").attr("style", "background: url(https://ghchart.rshah.org/FFA500/lewky);background-repeat: no-repeat;background-position: center;background-size: auto 7.5rem;");

  /* 评论框加载背景图片 */
  $(".v[data-class=v] .veditor").attr("style", "background-image: url(https://cdn.jsdelivr.net/gh/laokong4628/laokong4628.github.io@master/images/common/valinebg.webp) !important;");
  // $(".v[data-class=v] .veditor").attr("style", "background-image: url(/images/common/valinebg.webp) !important;)";
});

function getCurrentDateString() {
  var now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  return "" + now.getFullYear() + (month < 10 ? "0" + month : month) + (day < 10 ? "0" + day : day) + (hour < 10 ? "0" + hour : hour);
}
