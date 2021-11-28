const isPopup = function (popupItem, elements) {
  if (!popupItem || elements) {
    return false
  }

  for (const element of elements) {
    if (popupItem.contains(element)) {
      return true
    }

    if (element.contains(popupItem)) {
      return false
    }
  }

  return false
}

const clickHandler = "ontouchstart" in document.documentElement ? "ontouchstart" : "click"

export default {
  beforeMount: (el, binding) => {
    function handler(e) {
      console.log({ contain: el.contains(e.target) })

      if (!binding.instance) {return}
      const elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      if (el.contains(e.target) || isPopup(binding.instance.popupItem, elements)) {return}

      el.__vueClickOutside__.callback(e)
    }

    el.__vueClickOutside__ = {
      handler,
      callback: binding.value,
    }

    document.addEventListener(clickHandler, handler)
  },
  updated: function(el, binding) {
    el.__vueClickOutside__.callback = binding.value
  },
  unmounted(el) {
    el.__vueClickOutside__ && document.removeEventListener(clickHandler, el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  },
}