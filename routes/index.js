const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.render('index') });
router.get('/statistics', (req, res) => { res.render('statistics') });
router.get('/about', (req, res) => { res.render('about') });
router.get('/team', (req, res) => { res.render('team') });
router.get('/contact', (req, res) => { res.render('contact') });
router.get('/register', (req, res) => { res.render('register') });

module.exports = router;