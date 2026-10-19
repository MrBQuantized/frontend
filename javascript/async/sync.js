
 

function task1(callback) {
    setTimeout(() => {
        console.log("1. Wake up.🛌🥱");
        callback();
    }, 1000);;

} 
function task2(callback) {
    setTimeout(() => {
        console.log("2. Brush teeth.🪥 ");
        callback();
    }, 2000);;

} 
function task3(callback) {
    setTimeout(() => {
        console.log("3. Take my bath. 🛀");
        callback();
    },1500);;

} 
function task4(callback) {
    setTimeout(() => {
        console.log("4. Dress up for work/school. 👕👖");
        callback();
    }, 3000);;
    
} 
function task5(callback) {
    setTimeout(() => {
        console.log("5. Eat breakfast. 🍽️🍔");

        callback();
    }, 1000);;
    
} 
function task6(callback) {
    setTimeout(() => {
        console.log("6. Wash mouth. 🥛");
        callback();
    }, 3500);;
    
} 
function task7(callback) {
    setTimeout(() => {
        console.log("7. Head to  work/school. 🏢🛻🚙");
        callback();
    }, 2500);;
    
} 

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => {
                        task7(() => {

                        })
                    })
                })
            }) 
        })
    })
})
