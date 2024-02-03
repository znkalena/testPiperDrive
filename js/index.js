

const popup = document.querySelector('.popup');
const form = document.querySelector('.form');
const submitBtn = form.querySelector('.form__btn--submit');
const inputsForm = form.querySelectorAll('.inputs');
const newJobBtn = document.querySelector('.create__job');
const detailsWrapper = document.querySelector('.details');
const inputAddress = document.getElementById('address');
const header = document.querySelector('.main__header');
const showForm =() => {
    popup.style.display = 'block';
}
const removeForm = () => {
    popup.style.display = 'none';    
}

export const createAside = (formDataObject) =>{
    detailsWrapper.innerHTML = '';

    for (let key in formDataObject) {        

        const divAside = document.createElement('div');
    divAside.className ='details__item';

    const spanAside = document.createElement('span');
    spanAside.className = `details__${key}--span`;
    spanAside.textContent = key;

    const pAside = document.createElement('p');
    pAside.className = `details__${key}--${key}`;
    pAside.textContent = formDataObject[key];

    divAside.append(spanAside,pAside);
    detailsWrapper.append(divAside);
    }   
}

const init = () => {
popup.style.display ='none';

newJobBtn.addEventListener('click',() =>{    
        showForm(); 
        newJobBtn.style.display ='none';       
});
let allFilled = true;
        inputsForm.forEach(input =>{
            if (input.value.trim() === ''){
            allFilled = false;
            }
        })
        
    submitBtn.disabled = allFilled;    
    

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData);        
        createAside(formDataObject);
        removeForm(); 
        newJobBtn.style.display ='block';       
        header.innerHTML =`<h2>Data successfully sent <a href="index.html">link to start page </a></h2>`;
    })

}
init();

