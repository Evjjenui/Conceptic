initParallax = ->
  container = $("#hookah-scroll")
  items = container.find(".hookah-item")
  controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter" }})

  return if window.innerWidth < 640

  tween = new TimelineMax().add([
    TweenMax.fromTo(container.get(0), 1, { backgroundPosition: "50% -150%", ease: Linear.easeNone }, { backgroundPosition: "50% 125%", ease: Linear.easeNone })
  ])

  new ScrollMagic.Scene({ triggerElement: container.get(0), duration: 2000 })
    .setTween(tween)
    .addTo(controller)

  items.each (index, item) ->
    new ScrollMagic.Scene({ triggerElement: item, offset: 50 })
      .setClassToggle(item, "visible")
      .addTo(controller)

$ ->
  initParallax()
