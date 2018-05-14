module.exports = {

  show404(err, req, res, next) {
      console.log(err)
    res.sendStatus(404);
  },
  show406(err, req, res, next) {
      console.log(err);
    res.sendStatus(406);
  },
  showStudents(req, res) {
    res.render('students/index.ejs', {
        data: res.locals.students
    })
  },
  showHouses(req, res) {
    res.render('houses/index.ejs', {
        data: res.locals.houses
    })
  },
  showOneHouse(req, res) {
      res.render('houses/show.ejs', {
          data: res.locals.house
      })
  },
  showOne(req, res) {
    res.render('students/show.ejs', {
        data: res.locals.student
    })
  },
  showAddForm(req, res) {
    res.render('students/show.ejs')
  },
  showEditForm(req, res) {
     res.render('students/edit.ejs', {
         data: res.locals.student
     })
  },
  handleCreate(req, res) {
    res.redirect('/students/index.ejs')
  },
  handleUpdate(req, res) {
     let id = req.params.id
     res.redirect(`/students/${id}`)
  },
  handleDelete(req, res) {
     res.redirect('/index.ejs')
  },

};
