function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const customer ={
                id: 1,
                name: 'Iqbal',
                isPremium: true,
                email: 'abc@gmail.com'
            };
            resolve(customer);
        }, 4000);
    })
}

const getEmail = async () => {
    const customer = await getCustomer(1);
    const topMovies = customer.isPremium ? await getTopMovies() : null;
    const mail = await sendEmail(customer.email, topMovies);
    console.log(mail);
}

getEmail();

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const topMovies = ['Movie1', 'Movie2', 'Movie3'];
            resolve(topMovies);
        }, 3000)
    })
}

function sendEmail(email, movies) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const mail = {
                to: email,
                subject: 'Top movies',
                text: 'Movie Name: ' + movies[0] + ', ' + movies[1] + ', ' + movies[2]
            }
            resolve(mail);
        }, 2000)
    })
}