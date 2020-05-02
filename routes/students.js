const router = require('express').Router();
//all route are mounted on top of api/student
const Student = require('../db/models/student')
router.get('/', async(req, res, next) => {
  try{
  let Students = await Students.findAll()
    res.send(students)
  }catch(err){
    next(err)
  }
})

router.get('/:id', async(req, res, next) => {
 try{
   let studentid = req.params.id  //when see :id think about req.params

   /*
   //this is the best way to get something specific
  let student = await Student.findOne({
  where: {id: studentid,
  firstNAme: 'Joel'}
  })
    */
   //or try this one, but the findbyid or findbyPK are not always working
   let student = await Student.findById(id)//or findByPk
   res.send(student)
 }catch(error){
   next(error)
 }
})

//describe post...
//te student info will be in req.body
//u get something coiung in and u wannaadd it to db
//req.boy is an object
router.post('/', async (req, res, next) =>{
  try {
    let student = await Student.create(req.body)
    res.status(201).send(student)

  } catch (error) {
   next(error)
  }
})

//put
router.put('/:id', async (req, res, next) =>{
  try {
    //neemd to find student that represents the id
    let student = await Student.findOne({
      where: {id: req.params.id}//this is saying where id = req.params.id
    })
    await student.update(req.body)
    student.save()// but need it alawys to update
    res.send(student)


  } catch (error) {
    next(error)
  }
})


router.delete('/:id', async(req, res, next ) => {
  try {
    await Student.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204)
    // res.send().status(204)    //or this system
  } catch (aw) {
    next(error)
  }
})

module.exports = router;


