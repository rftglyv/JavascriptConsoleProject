
const prompt = require("prompt-sync")({sigint:true});

var users = []
class User {
    constructor(fname, lname, age, email, job, yearsServed, city, password){
        this.fname = fname
        this.lname = lname
        this.age = age
        this.email = email
        this.job = job
        this.yearsServed = yearsServed
        this.city = city
        this.password = password
    }
    getFullUserData(){
        return `Ad : ${this.fname} \nSoyad : ${this.lname} \nYaş : ${this.age} \nEmail : ${this.email} \nPeşə : ${this.job} \nİşlədiyi il : ${this.yearsServed} \nŞəhər : ${this.city}\n`
    }
}

function regUser(){
    let fname = prompt("Ad daxil edin : ")
    let lname = prompt("Soyad daxil edin : ")
    let age = prompt("Yaş daxil edin : ")
    let email = prompt("Email daxil edin : ")
    let job = prompt("Peşəsini daxil edin : ")
    let yearsServed = prompt("Neçə il işlədiyini daxil edin : ")
    let city = prompt("Şəhəri daxil edin : ")
    let password = prompt("Şifrəni daxil edin : ")
    let user = new User(fname, lname, age, email, job, yearsServed, city, password)
    users.push(user)
}

function showAllUsers(){
    for(let user of users){
        console.log(user.getFullUserData())
    }
}

function filterUserByName(filterPhrase){
    let result = 0
    result = users.filter(user => user.fname.toUpperCase().indexOf(filterPhrase.toUpperCase()) !=-1);
    if (result == 0){
        console.log(`${filterPhrase} adında istifadəçi yoxdur`)
    }else{
        for(let user of result){
            console.log(`\nİstifadəçi adı : ${user.fname + " " + user.lname} \nYaşı : ${user.age} \nŞəhər : ${user.city}`);
        }
    }
}

function filterUserByAge(filterPhrase){
    let result = 0
    result = users.filter(user => user.age.indexOf(filterPhrase) !=-1);
    if (result == 0){
        console.log(`${filterPhrase} yaşında istifadəçi yoxdur`)
    }else{
        for(let user of result){
            console.log(`\nİstifadəçi adı : ${user.fname + " " + user.lname} \nYaşı : ${user.age} \nŞəhər : ${user.city}`);
        }
    }
}

function filterUserByCity(filterPhrase){
    let result = 0
    result = users.filter(user => user.city.toUpperCase().indexOf(filterPhrase.toUpperCase()) !=-1);
    if (result == 0){
        console.log(`${filterPhrase} şəhərində yaşayan istifadəçi yoxdur`)
    }else{
        for(let user of result){
            console.log(`\nİstifadəçi adı : ${user.fname + " " + user.lname} \nYaşı : ${user.age} \nŞəhər : ${user.city}`);
        }
    }
    
}

// Menu
let mainMenu = `\n\x1b[2m\x1b[44m Əsas Menyu \x1b[0m \n1. Qeydiyyat üçün 1 seçin
2. Bütün istifadəçiləri görmək üçün 2 seçin
3. İstifadəçini axtarışı üçün 3 seçin
0. Əməliyyatı sonlandırmaq üçün 0 seçin\n`
let subMenu = `\n\x1b[2m\x1b[44m İstifadəçi Axtarışı \x1b[0m \n1. İstifadəçiləri adına görə axtarmaq üçün 1 seçin
2. İstifadəçiləri yaşına görə axtarmaq üçün 2 seçin
3. İstifadəçiləri şəhərinə görə axtarmaq üçün 3 seçin
0. Əsas menyuya qayıtmaq üçün 0 seçin\n`
while (true){
    console.log(mainMenu)
    let menuInput = prompt(`\x1b[42m Əməliyyat seçin \x1b[0m:`)
    console.log("\n")
    if(menuInput == "1"){
        regUser()
        console.clear()
    }else if(menuInput == "2"){
        showAllUsers()
        console.log("\n")
    }
        //Sub Menu
        else if(menuInput == "3"){
            while (true){
                    console.log(subMenu)
                    let menuInput = prompt(`\x1b[42m Əməliyyat seçin \x1b[0m:`)
                    console.log("\n")
                if(menuInput == "1"){
                    let filterPhrase = prompt(`Axtarılacaq adı daxil edin : `)
                    filterUserByName(filterPhrase)
                    console.log("\n")
                }else if(menuInput == "2"){
                    let filterPhrase = prompt(`Axtarılacaq yaşı daxil edin : `)
                    filterUserByAge(filterPhrase)
                    console.log("\n")
                }
                else if(menuInput == "3"){
                    let filterPhrase = prompt(`Axtarılacaq şəhəri daxil edin : `)
                    filterUserByCity(filterPhrase)
                    console.log("\n")
                }
                else if (menuInput == "0"){
                    console.clear()
                    console.log("\x1b[36m Axtarış sonlandırıldı \x1b[0m")
                    break
                }else{
                    console.clear()
                    console.log("\x1b[31m Düzgün əməliyyat daxil edilməyib! \x1b[0m")
                }
            }
        }
        //Sub Menu END
        
    else if (menuInput == "0"){
        console.clear()
        console.log("\x1b[31m Əməliyyat sonlandırıldı \x1b[0m")
        break
    }else{
        console.clear()
        console.log("\x1b[31m Düzgün əməliyyat daxil edilməyib! \x1b[0m")
    }
}
// Menu END