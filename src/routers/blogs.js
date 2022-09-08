const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const blogs = require('../db.json');

router.get('/api/blogs', (req, res)=>{
    res.json(blogs)
})

router.post('/api/blogs', (req,res) =>{
    const {categoria,title, descripBlogs, imgBlogs, color, linkBlogs} = req.body;
    if(categoria && title && descripBlogs && color && linkBlogs){
        const id = blogs.length + 1;
        const newBlogs = {id, ...req.body}
        blogs.push(newBlogs)
        res.json(blogs);
    }else{
        res.status(500).json({error : 'There was an error'})

    }
    res.send("recivido")
})

router.put('/api/blogs/:id', (req, res) =>{
    const {id} = req.params;
    const {categoria,title, descripBlogs, imgBlogs, color, linkBlogs} = req.body;
    if(categoria && title && descripBlogs && color && linkBlogs){
        _.each(blogs,(blog, i)=>{
            if(blog.id == id){
                blog.categoria = categoria;
                blog.title = title;
                blog.descripBlogs = descripBlogs;
                // blog.imgBlogs = imgBlogs;
                blog.color = color;
                blog.linkBlogs = linkBlogs;
            }
        })
        res.json(blogs);
    }else{
        res.status(500).json({error : 'There was an error'});
    }
})

router.delete('/api/blogs/:id', (req,res) =>{
    const {id} = req.params;
    _.each(blogs,(blog, i)=>{
        if(blog.id == id) {
            blogs.splice(i, 1)
        }
    });
    res.send(blogs)
})



module.exports = router;