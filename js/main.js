document.addEventListener('DOMContentLoaded', function() {
  pageBody = document.querySelector('body');
  pageSwitch = pageBody.querySelector('.switch');
  pageStatus = pageBody.querySelector('.status');

  switchOff();

  pageSwitch.addEventListener('click', switchChange);

  function switchChange() {
    if(pageBody.className === 'dark') {
      switchOn();
    } else {
      switchOff();
    }
  };

  function switchOn() {
    pageBody.className = 'light';
    pageSwitch.classList.remove("off");
    pageSwitch.classList.add("on");
    pageStatus.innerText = 'It\'s so bright in here!';
  };

  function switchOff() {
    pageBody.className = 'dark';
    pageSwitch.classList.remove("on");
    pageSwitch.classList.add("off");
    pageStatus.innerText = 'Hey, who turned off the lights?';
  };

});
