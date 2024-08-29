## 29 AUGUST:

1. show dbs. 
2. db.createCollection(”name “)
3. use  <db_name>
4. show collections     → database m jitne bhi collections h

### CREATE commands:-

1. db.collection_name.insertOne({ })  →single user data 
2. db.collection_name.insertMany ( [ {…} , {…} , {…} ] )  → list m data daalte h
3. db.collection_name.insertOne({date:ISODate()});
4. db.collection_name.find( ) →to show all the collections
5. db.collection_name.find().pretty()

HW : explore more commands of CREATE operation 

### READ commands:-

1. db.collection_name.findOne( )   →ek baar without any id , then with id , then with name