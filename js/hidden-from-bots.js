const emailHidde = document.getElementsByClassName('emailHidde');
const phoneHidde = document.getElementsByClassName('phoneHidde');

for (let i = 0; i < emailHidde.length; i++) {
  emailHidde[i].style.cssText = 'cursor:pointer';
  emailHidde[i].onclick = function () {
    window.location.href = `mailto:${email}`;
  };
}
for (let i = 0; i < phoneHidde.length; i++) {
  phoneHidde[i].style.cssText = 'cursor:pointer';
  phoneHidde[i].onclick = function () {
    window.location.href = `tel:${phone}`;
  };
}

for (let i = 1; i <= hiddeNumber; i++) {
  let emailHidde = document.getElementsByClassName('emailHidde' + [i]);
  let phoneHidde = document.getElementsByClassName('phoneHidde' + [i]);
  for (let i = 0; i < phoneHidde.length; i++) {
    phoneHidde[i].style.cssText = 'cursor:pointer';
    phoneHidde[i].onclick = function () {
      window.location.href = `tel:${phone}`;
    };
  }
  for (let i = 0; i < emailHidde.length; i++) {
    emailHidde[i].style.cssText = 'cursor:pointer';
    emailHidde[i].onclick = function () {
      window.location.href = `mailto:${email}`;
    };
  }
}