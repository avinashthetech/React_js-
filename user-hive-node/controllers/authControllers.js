const bcrypt=require('bcryptjs');


const loginController=async(req,res)=>{
    try{
        const {email,password}=req.body;
        //Validation 
        if(!email || !password){
            return res.status({
                success:false,
                message:"Please Provide Email Or Password"
            })
    
        }
        // Check user Info
        const user=await userSchema.findOne({email})
        console.log(user)
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User Not Found"
            })
        }
    
        // Check user password || Compare
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            // return res.status(500).send({success:false, meassage:"Invalid Credentials" })
            return res.status(401).send({success:false, message:"Invalid Credentials"})
    
        }
        user.password=undefined;
    
        
        res.status(200).send({success:true,message:"Login SuccessFully",user})
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Login API',
            error
        })
    }
    
    };

  const registerController = async (req, res) => {
 
        try {
            const { userName, email, password, phone, address } = req.body;
    
            // Validation
            if (!userName || !email || !password || !gender || !phone||!dob || !agreement) {
                return res.status(400).send({
                    success: false,
                    message: 'Please provide all fields',
                });
            }
    
            // Check if the user already exists
            const existingUser = await userSchema.findOne({ email });
            if (existingUser) {
                return res.status(400).send({
                    success: false,
                    message: 'Email already registered. Please login.',
                });
            }
            // hashing password
        var salt=bcrypt.genSaltSync(10);
        const hashedPassword= await bcrypt.hash(password,salt)
    
            // Create a new user
            const user = await userSchema.create({ userName, email, password:hashedPassword, phone, gender ,dob});
            res.status(201).send({
                success: true,
                message: 'Successfully registered',
                user,
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Error in Register API',
                error,
            });
        }
    };

    
    module.exports = {
         loginController,
         registerController
        
    };
    
