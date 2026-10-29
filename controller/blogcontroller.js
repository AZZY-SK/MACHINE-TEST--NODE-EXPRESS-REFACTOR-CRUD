
const blogs=require("../data/blogs")

// getall

const getall=(req,res)=>{
      try{
      
         res.status(200).json({
             ok:true,
             message:"fetched succesfully",
             body:blogs
         })

      }catch(error){
          
         res.status(500).json({
             ok:false,
             message:"something went wrong",
             error:error.message
         })

      }
};

//get single

const getsingle=(req,res)=>{
       try{
             const id= Number(req.params.id);
    
           const blog=blogs.find(blog=>blog.id===id);
        
             if(blog==undefined){
                return res.status(500).json({
               message:"blog is not available"
               })
           }

           res.status(200).json({
               ok:true,
               message:"fetched successfully",
               body:blog
           })
       }catch(error){
              res.status(404).json({
                  ok:false,
                  message:"not found",
                  error:error.message
              })

       }

};

//create

const post=(req,res)=>{
            try{
               const{title,author,category,content} =req.body;

               const newblogs={
                      id:blogs.length+1,
                        title:title,
                        author:author,
                        category:category,
                        content:content
                        
               }

                 blogs.push(newblogs);

                  res.status(201).json({
                      ok:true,
                      message:"new blog created successfully",
                      body:newblogs
                  })
            }catch(error){
                res.status(500).json({
                 ok:false,
                 message:"failed to create new blog",
                 error:error.message
                 })
            }
};

// delete

     const remove=(req,res)=>{
            try{
                   const id=Number(req.params.id);
                   const getindex=blogs.findIndex(blog=>blog.id===id);
                     if(getindex===-1){
                res.status(500).json({
                    ok:false,
                  message:"blog is not available"
               })
           }
                   blogs.splice(getindex);

                  res.status(200).json({
                       ok:true,
                       message:"blog is deleted successfully",
                       body:null
                  })

            }catch(error){
               res.status(500).json({
                    ok:false,
                    message:"something went wrong",
                    error:error.message
               })
                 
            }
    };

    //UPDATE

    const update=(req,res)=>{
  try{
          let updateid=Number(req.params.id)
  
           let indexnum= blogs.findIndex(blog=>blog.id===updateid)

           if(indexnum===-1){
            return res.status(404).json({
                  success:false,
                  message:"bject doesnt exist"
              })
           }

           let updatedobj={
                 ...blogs[indexnum],
                 ...req.body,
                 id:updateid
           }

           blogs[indexnum]=updatedobj

           res.status(201).json({
              success:true,
              message:"updated successfully",
              body:updatedobj
           })
  } 
    catch(error){
            res.status(500).json({
               success:false,
               message:"something went wrong",
               error:error.message
            })
    }
};

module.exports={
     getall,
     getsingle,
     post,
     remove,
     update
}