document.getElementById('submit').onclick = (event)=>{ 
    event.preventDefault();
   const nameCustomer = document.getElementById('name').value;
   const feedback = document.getElementById('feedback').value;

   fetch('https://624efe61bdda77e9a9b83c0b.mockapi.io/api/v1/feedback', {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // nameCustomer: nameCustomer
        nameCustomer,
        feedback
    })
    }).then(res => res.json())
    .then(res => console.log(res));

    alert("Cảm ơn đã góp ý cho sự phát triển của nhà hàng chúng tôi");
    document.getElementById('name').value = "";
    fetch('https://624efe61bdda77e9a9b83c0b.mockapi.io/api/v1/feedback')
    .then(res => res.json())
    .then(res => {
        printFeedback(res);
    });

const printFeedback = (listFeedback) => { 
    let stringHTML = '';
    for(const feedback of listFeedback){
        stringHTML += `
        <div class="rate1">
            <div>
                <image class="image1" src="${feedback.avatar}" alt="Hình ảnh"/>
                <p>${feedback.nameCustomer} :<em> ${feedback.feedback} </em></p>
            </div>
            <image class="image2" src ="${feedback.image}" alt = "hình ảnh"/>
        </div>
        `
    }
    document.getElementById('contentFeedback').innerHTML = stringHTML;
    }    
    }
fetch('https://624efe61bdda77e9a9b83c0b.mockapi.io/api/v1/feedback')
    .then(res => res.json())
    .then(res => {
        printFeedback(res);
    });

const printFeedback = (listFeedback) => { 
    let stringHTML = '';
    for(const feedback of listFeedback){
        stringHTML += `
        <div class=" rate1">
            <div>
                <image class="image1" src="${feedback.avatar}" alt="Hình ảnh"/>
                <p>${feedback.nameCustomer} :<em> ${feedback.feedback} </em></p>
            </div>
            <image class="image2" src ="${feedback.image}" alt = "hình ảnh"/>
        </div>
        `
    }
    document.getElementById('contentFeedback').innerHTML = stringHTML;
}
