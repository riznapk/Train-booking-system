const users = [
    {username: 'rizna' , password:'rizna@123'},
    {username: 'roshan', password:'roshan@123'},
    {username: 'shubham', password:'shubham@123'},
    {username: 'rizwan', password:'rizwan@123'},
    {username: 'haya', password:'haya@123'},
    {username: 'zayan', password:'zayan@123'}
];

export const userValidity = (username,password) => {
    const existingUser = users.find((user) => user.username === username && user.password === password);
    if(existingUser) {
        return true;
    }
    else
        return false;
};

