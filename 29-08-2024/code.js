// Microsoft Windows [Version 10.0.22631.4112]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\heena>use chitkara
// 'use' is not recognized as an internal or external command,
// operable program or batch file.

// C:\Users\heena>mongosh
// Current Mongosh Log ID: 66cff5f82d3654f7e22710bb
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.14
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2024-08-29T09:15:42.098+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> use chitkara
// switched to db chitkara
// chitkara> show collections
// faculty
// student
// user
// chitkara> db.user.insertOne({date:ISODate()})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66cff82d2d3654f7e22710bc')
// }
// chitkara>
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// chitkara> db.collection_name.find( )

// chitkara> db.collection_name.find( )

// chitkara>
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// chitkara> db.collection_name.find( )

// chitkara> db.user.find()
// [
//   {
//     _id: ObjectId('66ceba92b21cb23cf42710bc'),
//     name: 'Heena',
//     age: 28,
//     class: 'G-9'
//   },
//   {
//     _id: ObjectId('66cebfb0f94e82ba792710bc'),
//     name: 'Alice',
//     age: 20,
//     marks: 85,
//     subject: 'Mathematics'
//   },
//   {
//     _id: ObjectId('66cebfb0f94e82ba792710bd'),
//     name: 'Bob',
//     age: 22,
//     marks: 78,
//     subject: 'Physics'
//   },
//   {
//     _id: ObjectId('66cebfb0f94e82ba792710be'),
//     name: 'Charlie',
//     age: 21,
//     marks: 92,
//     subject: 'Chemistry'
//   },
//   {
//     _id: ObjectId('66cebfb0f94e82ba792710bf'),
//     name: 'David',
//     age: 23,
//     marks: 88,
//     subject: 'Biology'
//   },
//   {
//     _id: ObjectId('66cebfb0f94e82ba792710c0'),
//     name: 'Eve',
//     age: 19,
//     marks: 95,
//     subject: 'Computer Science'
//   },
//   {
//     _id: ObjectId('66cff82d2d3654f7e22710bc'),
//     date: ISODate('2024-08-29T04:25:17.674Z')
//   }
// ]
// chitkara> db.user.find().pretty()
// [
//   {
//     _id: ObjectId('66ceba92b21cb23cf42710bc'),
//     name: 'Heena',
//     age: 28,
//     class: 'G-9'
//   },
//   {
//     _id: ObjectId('66cebfb0f94e82ba792710bc'),
//     name: 'Alice',
//     age: 20,
//     marks: 85,
//     subject: 'Mathematics'
//   },
//   {
//     _id: ObjectId('66cebfb0f94e82ba792710bd'),
//     name: 'Bob',
//     age: 22,
//     marks: 78,
//     subject: 'Physics'
//   },
//   {
//     _id: ObjectId('66cebfb0f94e82ba792710be'),
//     name: 'Charlie',
//     age: 21,
//     marks: 92,
//     subject: 'Chemistry'
//   },
//   {
//     _id: ObjectId('66cebfb0f94e82ba792710bf'),
//     name: 'David',
//     age: 23,
//     marks: 88,
//     subject: 'Biology'
//   },
//   {
//     _id: ObjectId('66cebfb0f94e82ba792710c0'),
//     name: 'Eve',
//     age: 19,
//     marks: 95,
//     subject: 'Computer Science'
//   },
//   {
//     _id: ObjectId('66cff82d2d3654f7e22710bc'),
//     date: ISODate('2024-08-29T04:25:17.674Z')
//   }
// ]
// chitkara> db.user.findOne()
// {
//   _id: ObjectId('66ceba92b21cb23cf42710bc'),
//   name: 'Heena',
//   age: 28,
//   class: 'G-9'
// }
// chitkara> db.user.findOne({66cebfb0f94e82ba792710bc})
// Uncaught:
// SyntaxError: Identifier directly after number. (1:19)

// > 1 | db.user.findOne({66cebfb0f94e82ba792710bc})
//     |                    ^
//   2 |

// chitkara> db.user.findOne({_id:ObjectId('66cebfb0f94e82ba792710bc')})
// {
//   _id: ObjectId('66cebfb0f94e82ba792710bc'),
//   name: 'Alice',
//   age: 20,
//   marks: 85,
//   subject: 'Mathematics'
// }
// chitkara> db.user.findOne({name:"Bob"})
// {
//   _id: ObjectId('66cebfb0f94e82ba792710bd'),
//   name: 'Bob',
//   age: 22,
//   marks: 78,
//   subject: 'Physics'
// }
// chitkara> db.user.insertOne({name: "Bob", age: 30, marks: 85, subject: "Chemistry"})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66cffea12d3654f7e22710bd')
// }
// chitkara> db.user.findOne({name:"Bob"})
// {
//   _id: ObjectId('66cebfb0f94e82ba792710bd'),
//   name: 'Bob',
//   age: 22,
//   marks: 78,
//   subject: 'Physics'
// }
// chitkara> db.user.findOne({name:"Bob"})
// {
//   _id: ObjectId('66cebfb0f94e82ba792710bd'),
//   name: 'Bob',
//   age: 22,
//   marks: 78,
//   subject: 'Physics'
// }
