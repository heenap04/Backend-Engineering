// C:\Users\Dell>mongosh --version
// 2.3.0

// C:\Users\heena>mongosh
// Current Mongosh Log ID: 66ceb71c59148545fd2710bb
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.14
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/


// To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
// You can opt-out by running the disableTelemetry() command.

// ------
//    The server generated these startup warnings when booting
//    2024-08-28T10:05:36.557+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// admin   40.00 KiB
// config  72.00 KiB
// local   40.00 KiB
// test> db
// test
// test> use chitkara
// switched to db chitkara

// chitkara> db.createCollection("students")
// { ok: 1 }
// chitkara> db.createCollection("user")
// { ok: 1 }
// chitkara> db.user.insertOne({name:"Heena",age:19,class:"G9"})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66ceba9759148545fd2710bc')
// }

// chitkara> db.student.insertMany([{ name: "Jack", age: 20, marks: 85, subject: "Mathematics" }, { name: "Bob", age: 22, marks: 78, subject: "Physics" }, { name: "Nav", age: 21, marks: 92, subject: "Chemistry" }, { name: "Illu", age: 23, marks: 88, subject: "Biology" }, { name: "Eva", age: 19, marks: 95, subject: "Computer Science" }])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66cebee559148545fd2710bd'),
//     '1': ObjectId('66cebee559148545fd2710be'),
//     '2': ObjectId('66cebee559148545fd2710bf'),
//     '3': ObjectId('66cebee559148545fd2710c0'),
//     '4': ObjectId('66cebee559148545fd2710c1')
//   }
// }
// chitkara> db.createCollection("faculty")
// { ok: 1 }
// chitkara> db.faculty.insertMany([{name : "Simran", age : 45, rating :3.2,subject:"Math"},{name : "Raj", age : 55, rating :3.5,subject:"Physics"},{name : "Abc", age : 32, rating :2.5,subject:"Chemistry"},{name : "Lmno", age : 29, rating :5.2,subject:"Biology"},{name : "Arjun", age : 32, rating :4.0,subject:"Computer Science"}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66cec15f59148545fd2710c2'),
//     '1': ObjectId('66cec15f59148545fd2710c3'),
//     '2': ObjectId('66cec15f59148545fd2710c4'),
//     '3': ObjectId('66cec15f59148545fd2710c5'),
//     '4': ObjectId('66cec15f59148545fd2710c6')
//   }
// }

// chitkara> db.user.insertMany([{ name: "Jack", age: 20, marks: 85, subject: "Mathematics" }, { name: "Bob", age: 22, marks: 78, subject: "Physics" }, { name: "Nav", age: 21, marks: 92, subject: "Chemistry" }, { name: "Illu", age: 23, marks: 88, subject: "Biology" }, { name: "Eva", age: 19, marks: 95, subject: "Computer Science" }])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66cec21859148545fd2710c7'),
//     '1': ObjectId('66cec21859148545fd2710c8'),
//     '2': ObjectId('66cec21859148545fd2710c9'),
//     '3': ObjectId('66cec21859148545fd2710ca'),
//     '4': ObjectId('66cec21859148545fd2710cb')
//   }
// }

