<template>
  <div class="bodys">
    <div class="stars"></div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data() {
    return {

    }
  },
  mounted() {
    // window.onload = function () {
    var stars = 800;
    var $stars = $('.stars');
    var r = 800;
    for (var i = 0; i < stars; i++) {
      var $star = $('<div/>').addClass('star');
      $stars.append($star);
    }
    $('.star').each(function () {
      var cur = $(this);
      var s = 0.2 + Math.random() * 1;
      var curR = r + Math.random() * 300;
      cur.css({
        transformOrigin: '0 0 ' + curR + 'px',
        transform: ' translate3d(0,0,-' + curR + 'px) rotateY(' + Math.random() * 360 + 'deg) rotateX(' + Math.random() * -50 + 'deg) scale(' + s + ',' + s + ')'
      });
    });
  // }
  }
}
</script>

<style  >
body {
    height: 800px;
    width: 1600px;
    background: radial-gradient(200% 100% at bottom center, #0070aa, #0b2570, #000035, #000);
    background: radial-gradient(220% 105% at top center, #000 10%, #000035 40%, #0b2570 65%, #0070aa);
    background-attachment: fixed;
    overflow: hidden;
  }

  @keyframes rotate {
    0% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
    }

    100% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
    }
  }

  .stars {
    transform: perspective(500px);
    transform-style: preserve-3d;
    position: absolute;
    bottom: 0;
    perspective-origin: 50% 100%;
    left: 50%;
    animation: rotate 90s infinite linear;
  }

  .star {
    width: 2px;
    height: 2px;
    background: #F7F7B6;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0 0 -300px;
    transform: translate3d(0, 0, -300px);
    backface-visibility: hidden;
    animation: none;
    opacity: 1;
  }
</style>
