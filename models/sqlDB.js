const db = require('../config/dbConfig.js');

module.exports = {

    findAll() {
        console.log('inside model')
      return db.many(`
          SELECT students.*, houses.name AS house_name
          FROM students
          JOIN houses ON students.house_id = houses.id
          `)
    },

    findById(id) {
      return db.one(`
        SELECT students.*, houses.name AS house_name, houses.img_url
        FROM students
        JOIN houses ON students.house_id = houses.id
        WHERE students.id = $1
        `, id);
    },

    save(student){
      return db.one(`
        INSERT INTO students VALUES (
          fname = $/fname/,
          lname = $/lname/,
          image = $/image/,
          house_id = $/house_id/
        )
        RETURNING id
        `, student)
    },

    update(student) {
       return db.one(`
         UPDATE students
         SET
         fname = $/fname/,
         lname = $/lname/,
         image = $/image/,
         house_id = $/house_id/
         WHERE id = $/id/
         RETURNING *
       `, student);
     },

    showHouses(){
        return db.many( `
            SELECT  *
            FROM houses
        `);
    },

    findByIdHouses(id){
        return db.many(`
            SELECT students.*, houses.img_url
            FROM students
            JOIN houses ON students.house_id = houses.id
            WHERE students.house_id = $1
        `, id)
    },
}
