

const express=require("express");

const router=express.Router();

const blogsController=require("../controller/blogcontroller");

router.get("/",blogsController.getall);

router.get("/:id",blogsController.getsingle);

router.post("/",blogsController.post);

router.patch("/:id",blogsController.update);

router.delete("/:id",blogsController.remove);


module.exports=router;