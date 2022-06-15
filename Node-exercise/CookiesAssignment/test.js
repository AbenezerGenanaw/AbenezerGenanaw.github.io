let obj = {
    name: "ram", age: 45, skills: ["java", "javascript"], // select
    location: [{ address: "100 N", city: "fairfield" }, { addres: "200 N", city: "Burlington" }]// 
}

let selEle = [];
let address = [];
for (const key in obj) {
    let firstItem = obj[key];

    if (Array.isArray(firstItem)) {
        for (const single of firstItem) {
            if (typeof single == 'object') {
                // for (const okl in single) {
                //     console.log(okl + " " + single[okl]);
                // }
                address.push(single);
            } else {
                selEle.push(single);
            }
        }
    } else if (typeof firstItem == 'object') {
        for (const inK in firstItem) {
            console.log(inK + " " + firstItem[inK]);
        }
    } else {
        console.log(key + " " + firstItem);
    }
}