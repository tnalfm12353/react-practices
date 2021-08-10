const model = require('../models/kanban');

module.exports = {
    readAllCards: async function(req, res, next) {
        try {
            const results = await model.findAllCards();

            res.status(200)
                .send({
                    result: 'success',
                    data: results,
                    message: null
                });
        } catch(err){
          next(err);
        }       
    },
    createTask: async (req, res, next) =>{
        try{

            const cardNo = req.params['cardNo'];
            const task = req.body;
            
            // await model.insertTask(...) 성공~
            
            task.no = Date.now();
            
            res.status(200)
                .send({
                    result: 'success',
                    data: task,
                    message: null
                });
        } catch(error) {
            next(error);
        }
    }
}