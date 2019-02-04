
      var mask = document.querySelector('svg');
      var imageInSvg = document.querySelector('svg image');

      var logoStore = {
        baseImage: 'logo1.png',
        animations: [
          '1A.gif',
          '2A.gif',
          '3A.gif',
          '4A.gif',
          '5A.gif',
          '6A.gif',
          '7A.gif',
          '8A.gif',
        ]
      };

      mask.addEventListener('mouseenter', function(e){


        var randomNum = Math.floor(Math.random() * logoStore.animations.length);
        imageInSvg.href.baseVal = logoStore.animations[randomNum];
      });

      mask.addEventListener('mouseleave', function () {
        imageInSvg.href.baseVal = logoStore.baseImage;
      });