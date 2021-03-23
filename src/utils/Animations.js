const Animations = function () {
    const slideDown_default = {
      animation: 'slideDown',
      duration: 100,
      easing: 'easeOutSine',
    };
  
    const slideUp_default = {
      animation: 'slideUp',
      duration: 100,
      easing: 'easeOutSine',
    };
  
    const slideDown_quickView = {
      ...slideDown_default,
      duration: 300,
    };
  
    return {
      slideDown_default,
      slideUp_default,
      slideDown_quickView,
    };
  };
  
  export default new Animations();
  