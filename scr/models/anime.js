'use strict';



class TV {
  constructor() {
    this.id = 0;
    this.dataBase = [];
  }


  get(id) {
    // console.log('id', id);
    if (id) {
      // console.log('into the class', this.dataBase.record.id);
      return this.dataBase.find(record => record.id === id); //here line 14
    } else {
      return this.dataBase;
    }


  }
  create(obj) {
    // console.log(obj);
    let record = {
      id: ++this.id,
      record: obj,
    };
    this.dataBase.push(record);
    return record;
  }
  update(id, obj) {
    for (let i = 0; i < this.dataBase.length; i++) {
      if (this.dataBase[i].id === id) {
        this.dataBase[i].record = obj;
        return this.dataBase[i];
      }

    }
  }
  delete(id) {
    this.dataBase = this.dataBase.filter(obj => obj.id != id);
    // for (let i = 0; i < this.dataBase.length; i++) {
    //   if (this.dataBase[i].id === id) {
    //     this.dataBase.splice(i, 1);
    //     // return  this.dataBase
    //   }

    // }

  }
}
module.exports = TV;