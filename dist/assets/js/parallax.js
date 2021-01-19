(function() {
  var initParallax;

  initParallax = function() {
    var container, controller, items, tween;
    container = $("#hookah-scroll");
    items = container.find(".hookah-item");
    controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onEnter"
      }
    });
    if (window.innerWidth < 640) {
      return;
    }
    tween = new TimelineMax().add([
      TweenMax.fromTo(container.get(0),
      1,
      {
        backgroundPosition: "50% -150%",
        ease: Linear.easeNone
      },
      {
        backgroundPosition: "50% 125%",
        ease: Linear.easeNone
      })
    ]);
    new ScrollMagic.Scene({
      triggerElement: container.get(0),
      duration: 2000
    }).setTween(tween).addTo(controller);
    return items.each(function(index, item) {
      return new ScrollMagic.Scene({
        triggerElement: item,
        offset: 50
      }).setClassToggle(item, "visible").addTo(controller);
    });
  };

  $(function() {
    return initParallax();
  });

}).call(this);
