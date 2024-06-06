import foodModel from '../models/foodModel.js';
import fs from 'fs';

// Add food item
const addFood = async (req, res) => {
    try {
      const { name, description, price, category } = req.body;
      const image_path = req.file.path; // Get the path of the uploaded image
  
      const food = new foodModel({
        name,
        description,
        price,
        category,
        image: image_path // Save the image path in the database
      });
  
      await food.save();
      
      res.json({ success: true, message: "Food Added" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error" });
    }
  };
  
  // All food list
  const listFood = async (req, res) => {
    try {
      const foods = await foodModel.find({});
      res.json({ success: true, data: foods });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error" });
    }
  };
  
  // Remove food item
  const removeFood = async (req, res) => {
    try {
      const food = await foodModel.findById(req.body.id);
      if (!food) {
        return res.status(404).json({ success: false, message: "Food not found" });
      }
  
      // Remove the uploaded file from the filesystem
      fs.unlink(food.image, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ success: false, message: "Error deleting file" });
        }
      });
  
      await food.remove(); // Remove the food item from the database
      res.json({ success: true, message: "Food Removed" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error" });
    }
  };
  
  export { addFood, listFood, removeFood };

// // Add food item
// const addFood = async (req, res) => {
//   // Use the file's path to store its location
//   let image_path = `${req.file.path}`;

//   const food = new foodModel({
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     category: req.body.category,
//     image: image_path // Save the image path in the database
//   });

//   try {
//     await food.save();
//     res.json({ success: true, message: "Food Added" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // All food list
// const listFood = async (req, res) => {
//   try {
//     const foods = await foodModel.find({});
//     res.json({ success: true, data: foods });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // Remove food item
// const removeFood = async (req, res) => {
//   try {
//     const food = await foodModel.findById(req.body.id);
//     fs.unlink(`uploads/${food.image}`, () => {});

//     await foodModel.findByIdAndDelete(req.body.id);
//     res.json({ success: true, message: "Food Removed" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// export { addFood, listFood, removeFood };

// import foodModel from '../models/foodModel.js'
// import fs from 'fs'


// // add food item

// const addFood = async (req,res) => {

//     let image_filename = `${req.file.filename}`;

//     const food = new foodModel({
//         name:req.body.name,
//         description:req.body.description,
//         price:req.body.price,
//         category:req.body.category,
//         image:image_filename
//     })
//     try {
//         await food.save();
//         res.json({success:true,message:"Food Added"})
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:"Error"})
//     }
// }

// // all food list
// const listFood = async (req,res) => {
//     try {
//         const foods = await foodModel.find({});
//         res.json({success:true,data:foods})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// // remove food item
// const removeFood = async (req,res) => {
//     try {
//         const food = await foodModel.findById(req.body.id);
//         fs.unlink(`uploads/${food.image}`,()=>{})

//         await foodModel.findByIdAndDelete(req.body.id);
//         res.json({success:true,message:"Food Removed"})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }


// export {addFood,listFood,removeFood}