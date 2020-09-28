const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.render('upload')
});

router.get('/prueba', (req, res) => {
    res.render('prueba de fuejo!!')
})

module.exports = router;