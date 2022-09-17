// creating controller for home and exporting it
module.exports.home = (req, res) => {
    return res.render('home', {
        title: 'Home'
    });
}