const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.write("Hello World");
    res.end();
})

let response={

};

app.get('/bfhl',(req,res)=>{
    let list=JSON.stringify(response);
    res.write(list);
    res.end();
})

app.post('/bfhl', (req, res) => {

        const data = req.body.data;


        const user_id = "pranav_saluja_2111981140";


        const email = "pranav1140.be21@chitkarauniversity.edu.in";
        const roll_number = "2111981140";
        const odd_numbers = [];
        const even_numbers = [];
        const alphabets = [];


        data.forEach(element => {
            if (typeof element === 'string' && isNaN(element)) {
                alphabets.push(element.toUpperCase());
            } else if (!isNaN(element)) {
                if (parseInt(element) % 2 === 0) {
                    even_numbers.push(element);
                } else {
                    odd_numbers.push(element);
                }
            }
        });


        response = {
            is_success: true,
            user_id: user_id,
            email: email,
            roll_number: roll_number,
            odd_numbers: odd_numbers,
            even_numbers: even_numbers,
            alphabets: alphabets
        };
        res.json(response);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
