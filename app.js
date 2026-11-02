// //console.log("hi");
// let CustomerList = [];
// let ItemList = [];

// function addCustomeronAction() {

//     console.log("addCustomeronAction");

//     let txtName = document.getElementById("txtName").value;
//     let txtAge = document.getElementById("txtAge").value;
//     let txtAddress = document.getElementById("txtAddress").value;
//     let txtSalary = document.getElementById("txtSalary").value;
//     let txtContact = document.getElementById("txtContact").value;

//     console.log(txtName);
//     console.log(txtAge);
//     console.log(txtAddress);
//     console.log(txtSalary);
//     console.log(txtContact);

//     let customer = {
//         name: txtName,
//         age: txtAge,
//         address: txtAddress,
//         salary: txtSalary,
//         contact: txtContact
//     };

//     CustomerList.push(customer);
//     console.log(CustomerList);

//     let body = `
//         <tr>
//             <th>Age</th>
//             <th>Address</th>
//             <th>Salary</th>
//             <th>Contact</th>
//             <th>Name</th>    
//         </tr > `

//     for (let customer of CustomerList) {
//         body += `
//     <tr>
//         <td>${customer.name}</td>
//         <td>${customer.age}</td>
//         <td>${customer.address}</td>
//         <td>${customer.salary}</td>
//         <td>${customer.contact}</td>
//     </tr>
//     `
//     }
//     console.log(body);
//     document.getElementById("customerTable").innerHTML = body;
// }


// //---------------------------Item Management System------------------------------
// function addItemonAction() {
//     console.log("addItemonAction");

//     let txtItemName = document.getElementById("txtItemName").value;
//     let txtModel = document.getElementById("txtModel").value;
//     let txtPrice = document.getElementById("txtPrice").value;

//     console.log(txtItemName);
//     console.log(txtModel);
//     console.log(txtPrice);

//     let item = {
//         itemName: txtItemName,
//         model: txtModel,
//         price: txtPrice
//     };

//     ItemList.push(item);
//     console.log(ItemList);

//     let body = `
//         <tr>
//             <th>Item Name</th>
//             <th>Model</th>
//             <th>Price</th>
//         </tr>`

//     for (let item of ItemList) {
//         body += `
//     <tr>
//         <td>${item.itemName}</td>
//         <td>${item.model}</td>
//         <td>${item.price}</td>
//     </tr>
//     `
//     }
//     console.log(body);
//     document.getElementById("itemTable").innerHTML = body;

// }

let customer={
    name:"Mahesh",
    age:"25",
    address:"Colombo",
    salary:"75000",
    Contact: {
        provider:"Mobitel",
        number:"0771234567",
        data: {
            sample :"00001",
            test:{
                sp:"KO42",
                ms:"AW78",
            }
        }
    },
    Orders:[
        {
            name:"egg Bun",
            Qty:100,
            UnitPrice:150
        },
        {
            name:"Milk",
            Qty:50,
            UnitPrice:200
        }
    ]  
}

console.log(customer.Orders[0].Qty);