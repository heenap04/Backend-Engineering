// C:\Users\heena>mongosh
// Current Mongosh Log ID: 66d14233bc7691a7a22710bb
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



// chitkara> db.user.CountDocuments()
// TypeError: db.user.CountDocuments is not a function
// chitkara> db.user.countDocuments()
// 8
// chitkara> db.user.estimatedDocumentCount()
// 8
// chitkara> db.student.countDocuments()
// 5
// chitkara> db.student.estimatedDocumentCount()
// 5
// chitkara> db.faculty.countDocuments()
// 5
// chitkara> db.faculty.estimatedDocumentCount()
// 5

//TASK 1:-

// chitkara> db.student.updateMany( {},{ $set:{subject:"DataScience", address:"Chitkara University"} } )
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }

//TASK 2:-

// chitkara> db.student.bulkWrite([{
// ...     updateOne: {
// ...       filter: { name: "Alice" },
// ...       update: { $set: { grade: "A+" } }
// ...     }
// ...   },
// ...   {
// ...     updateOne: {
// ...       filter: { name: "Bob" },
// ...       update: { $set: { grade: "A" } }
// ...     }
// ...   },
// ...   {
// ...     updateOne: {
// ...       filter: { name: "Charlie" },
// ...       update: { $set: { grade: "B+" } }
// ...     }
// ...   },
// ...   {
// ...     updateOne: {
// ...       filter: { name: "David" },
// ...       update: { $set: { grade: "A" } }
// ...     }
// ...   },
// ...   {
// ...     updateOne: {
// ...       filter: { name: "Eve" },
// ...       update: { $set: { grade: "C" } }
// ...     }
// ...   }
// ... ])
// {
//   acknowledged: true,
//   insertedCount: 0,
//   insertedIds: {},
//   matchedCount: 5,
//   modifiedCount: 5,
//   deletedCount: 0,
//   upsertedCount: 0,
//   upsertedIds: {}
// }


//TASK 3:-

// chitkara> db.student.find({age:22,marks:90})
// [
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c2'),
//     name: 'Bob',
//     age: 22,
//     marks: 90,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   }
// ]
// chitkara> db.student.find({marks:{$gte:80},age:{$gte:18}})
// [
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c1'),
//     name: 'Alice',
//     age: 20,
//     marks: 85,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c2'),
//     name: 'Bob',
//     age: 22,
//     marks: 90,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c3'),
//     name: 'Charlie',
//     age: 21,
//     marks: 92,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'B+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c4'),
//     name: 'David',
//     age: 23,
//     marks: 88,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c5'),
//     name: 'Eve',
//     age: 19,
//     marks: 95,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'C'
//   }
// ]
// chitkara> db.student.find({grade:"A+"})
// [
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c1'),
//     name: 'Alice',
//     age: 20,
//     marks: 85,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A+'
//   }
// ]


// TASK 4:-

//$and

// chitkara> db.student.find({ $and: [ { age: 22 }, { marks: 90 }] })
// [
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c2'),
//     name: 'Bob',
//     age: 22,
//     marks: 90,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   }
// ]

//$or

// chitkara> db.student.find({ $or: [ { age: 22 }, { marks: 90 }] })
// [
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c2'),
//     name: 'Bob',
//     age: 22,
//     marks: 90,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   }
// ]

//$nor

// chitkara> db.student.find({ $nor: [ { age: 22 }, { marks: 90 }] })
// [
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c1'),
//     name: 'Alice',
//     age: 20,
//     marks: 85,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c3'),
//     name: 'Charlie',
//     age: 21,
//     marks: 92,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'B+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c4'),
//     name: 'David',
//     age: 23,
//     marks: 88,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c5'),
//     name: 'Eve',
//     age: 19,
//     marks: 95,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'C'
//   }
// ]


//$not 

// chitkara> db.student.find({ age: { $not: { $eq: 22 } } })
// [
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c1'),
//     name: 'Alice',
//     age: 20,
//     marks: 85,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c3'),
//     name: 'Charlie',
//     age: 21,
//     marks: 92,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'B+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c4'),
//     name: 'David',
//     age: 23,
//     marks: 88,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c5'),
//     name: 'Eve',
//     age: 19,
//     marks: 95,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'C'
//   }
// ]

//task5:-

//$exists

// chitkara> db.student.find({ address: { $exists: true } })
// [
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c1'),
//     name: 'Alice',
//     age: 20,
//     marks: 85,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c2'),
//     name: 'Bob',
//     age: 22,
//     marks: 90,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c3'),
//     name: 'Charlie',
//     age: 21,
//     marks: 92,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'B+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c4'),
//     name: 'David',
//     age: 23,
//     marks: 88,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c5'),
//     name: 'Eve',
//     age: 19,
//     marks: 95,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'C'
//   }
// ]

//$type:-

// chitkara> db.student.find({ age: { $type: "number" } })
// [
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c1'),
//     name: 'Alice',
//     age: 20,
//     marks: 85,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c2'),
//     name: 'Bob',
//     age: 22,
//     marks: 90,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c3'),
//     name: 'Charlie',
//     age: 21,
//     marks: 92,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'B+'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c4'),
//     name: 'David',
//     age: 23,
//     marks: 88,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66cec02ff94e82ba792710c5'),
//     name: 'Eve',
//     age: 19,
//     marks: 95,
//     subject: 'DataScience',
//     address: 'Chitkara University',
//     grade: 'C'
//   }
// ]
