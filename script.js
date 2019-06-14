let fredrik = {
    name: 'Fredrik',
    lastName: 'Trusohamn',
    email: 'fredrik.trusohamn@gmail.com',
    phone: '+46 76 001 96 30'    
};

function logUserInfo(user) {
console.log(user.name + ':' + user.lastName + ':' +  user.email + ':' + user.phone)  
};

logUserInfo(fredrik)