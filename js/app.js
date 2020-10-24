const stringifyFormData = fd =>{
    const data = {};
    for (let field of fd.keys()){
        data(field) = fd.get(field);
    }
    return JSON.stringify(data, null, 2);
}

const handleSubmit = e =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const stringifed = stringifyFormData(data);
    console.log(stringifed);
}
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

