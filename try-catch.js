function checkAge(){
    // console.log('Button clicked')
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error')

    try{
        // console.log(bbbbb);
        const age = parseInt(ageText);
        if(isNaN(age)){
            // console.log('age not found', age, ageText)
            throw "Please enter a number";
        }
        else if(age < 18){
            throw "Children not allowed"
        }
        else if(age > 30){
            throw "Older not allowed"
        }
        errorTag.innerHTML = '';

    }
    catch(err){
        console.log('Error: ', err)
        errorTag.innerHTML = 'ERROR: '+ err;
    }
    finally{
        console.log('All done inside try catch')
    }
    console.log(1111);
}