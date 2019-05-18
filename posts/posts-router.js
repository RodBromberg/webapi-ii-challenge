const express = require('express');

const Db = require('../data/db.js');

const router = express.Router();

// /api/posts
router.post('/posts', (req, res) => {
    const post = req.body
    if (!post.name || !post.bio) {
        res.status(400).json({ errorMessage: "Post not founds" })
    } else {
        Db.insert(user)
            .then(posts => {
                res.status(201).json(posts)
            })
            .catch(err => {
                res.status(500).json({ error: "Posts Not Found" })
            })
    }
})

router.get('/', async(req, res) => {
    try {
        const db = await Db.find()
        res.status(200).json(db)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error retrieving the posts',
        });
    }
})




// gets a specific psot by specifying /api/posts/(insert id)

router.get('/:id', async(req, res) => {
    try {
        const post = await Db.findById(req.params.id)

        if (post) {
            res.status(200).json(post)
        } else {
            res.status(404).json({ message: 'Post not found' })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Error getting post'
        })
    }
})



// deletes specific id ----> use 'localhost8080/api/users/choose id
router.delete('/:id', async(req, res) => {
    const { id } = req.params

    try {
        const count = await Db.remove(id)
        if (count > 0) {
            res.status(200).json({ message: 'The post has been removed' });
        } else {
            res.status(404).json({ message: 'The post could not be found' });
        }
    } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
            message: 'Error removing the post',
        });
    }

})


router.put("/:id", async(req, res) => {
    const post = req.body;
    try {
        const updatedPost = await Db.update(req.params.id, req.body);
        if (post) {
            res.status(200).json(updatedPost);
        } else {
            res.status(404).json({ message: 'error meng' })
        }
    } catch (err) {
        res
            .status(500)
            .json({ error: "The post information could not be modified." });
    }
});

module.exports = router;