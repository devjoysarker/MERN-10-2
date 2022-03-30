
// const students    = [
//     {
//         id        : 1,
//         name      : 'Joy sarker',
//         age       : 29,
//         gender    : 'Male',
//     },
//     {
//         id        : 2,
//         name      : 'Asruf Sir',
//         age       : 29,
//         gender    : 'Male',
//     },
//     {
//         id        : 3,
//         name      : 'Jillur vaar',
//         age       : 29,
//         gender    : 'Male',
//     },
//     {
//         id        : 4,
//         name      : 'Tohid bin aziam',
//         age       : 29,
//         gender    : 'Male',
//     }
// ];


// localStorage.setItem('students', JSON.stringify(students));

// let students = localStorage.getItem('students');

// console.log(JSON.parse(students));



// sessionStroage

// const students    = [
//     {
//         id        : 1,
//         name      : 'Joy sarker',
//         age       : 29,
//         gender    : 'Male',
//     },
//     {
//         id        : 2,
//         name      : 'Asruf Sir',
//         age       : 29,
//         gender    : 'Male',
//     },
//     {
//         id        : 3,
//         name      : 'Jillur vaar',
//         age       : 29,
//         gender    : 'Male',
//     },
//     {
//         id        : 4,
//         name      : 'Tohid bin aziam',
//         age       : 29,
//         gender    : 'Male',
//     }
// ];


// sessionStorage.setItem('students', JSON.stringify(students))

// let students = sessionStorage.getItem('students')

// console.log(JSON.parse(students));



document.cookie = "name = Joy Sarker ; 10000 ; path = /home";
document.cookie = "age  = 12 ; 10000 ; path =/home";
document.cookie = "skill  = PHP ; 10000 ; path =/";



console.log(document.cookie);