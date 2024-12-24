```javascript
//Solution: check the counter before decrementing
db.collection('myCollection').findOne({"_id":ObjectId("someId")}).then(doc =>{
if(doc && doc.counter > 0){
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:-1}});
}else{
//Handle the case where counter is 0 or less
console.log("Counter is already 0 or less. Cannot decrement further.");
}
});
```