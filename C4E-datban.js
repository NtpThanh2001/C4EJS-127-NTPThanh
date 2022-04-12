const name = document.getElementById('username');
const songuoi = document.getElementById('inputnumber');
const sdt = document.getElementById('inputsdt');
const form = document.getElementById('form');
const error = document.getElementById('error');
form.addEventListener('submit',(event) => {
    let back = []
  if (name.value === '' || name.value == NaN) {
    back.push('Tên người đặt bàn không được để trống')
  }
  if (sdt.value === '' || sdt.value == NaN) {
    back.push('Nhập số điện thoại')
  }
  if (songuoi.value < 2) {
    back.push('Đặt bàn từ 2 người')
  }
  if (back.length > 0) {
    event.preventDefault()
   error.innerText = back.join(', ')
  }
  
})
alert('Cảm ơn bạn đã đặt bàn');
