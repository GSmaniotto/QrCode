const inputValue = document.getElementById("inputValue");
const btnValue = document.getElementById("btnValue");
const imgQrCode = document.getElementById("imgQrCode");
const wrapper = document.getElementById("wrapper");
let valueDefault;

btnValue.addEventListener("click", () => {
  let qrcodeValue = inputValue.value.replaceAll(" ", ""); //.trim tira todos espaços
  const qrCodeNencontrado = !qrcodeValue || qrcodeValue === valueDefault;
  if (qrCodeNencontrado) return; // ( ! ) = não qrcodevalue

  valueDefault = qrcodeValue;
  btnValue.innerText = "Gerando Qr Code ...";
  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`;
  imgQrCode.addEventListener("load", () => {
    wrapper.classList.add("active");
    btnValue.innerText = "Gerar QRcode";
  });
});
