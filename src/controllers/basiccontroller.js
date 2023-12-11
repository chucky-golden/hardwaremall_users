const axios = require('axios')

// fetch all product
const findProducts = async (req, res) => {
    try {
        let response = await axios.get('https://gateway-6ew9.onrender.com/admin/users/products')
        
        if(response.data.foundproducts !== null){
            res.json({ products: response.data.foundproducts })
        }else{
            res.json({ message: 'no product uploaded yet' })
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}


// fetch product details using slug
const findProductWithSlug = async (req, res) => {
    try{ 
        let slug = req.params.slug
        let response = await axios.post('https://gateway-6ew9.onrender.com/admin/users/productsslug', {
            slug: slug
        })
        if(response.data.data !== null){
            res.json({ productDetails: response.data.data })
        }else{
            res.json({ message: 'no product uploaded yet' })
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}


// fetch the top 8 most imported product
const topProduct = async (req, res) => {
    try{ 
        let response = await axios.get('https://gateway-6ew9.onrender.com/admin/users/topproducts')
        
        if(response.data.foundproducts !== null){
            res.json({ products: response.data.foundproducts })
        }else{
            res.json({ message: 'no product uploaded yet' })
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}


// fetch video
const findVideo = async (req, res) => {
    try{
        let response = await axios.get('https://gateway-6ew9.onrender.com/admin/users/findvideo')
        
        if(response.data.foundvideos !== null){
            res.json({ video: response.data.foundvideos })
        }else{
            res.json({ message: 'no video uploaded yet' })
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}




// fetch vendors
const findVendors = async (req, res) => {
    try{
        let response = await axios.get('https://gateway-6ew9.onrender.com/vendors/users/vendors')
            
        if(response.data.foundvendors !== null){
            res.json({ vendors: response.data.foundvendors })
        }else{
            res.json({ message: 'no product uploaded yet' })
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}


// fetch vendor details using slug
const findVendorWithSlug = async (req, res) => {
    try{
        let slug = req.params.slug
        let response = await axios.post('https://gateway-6ew9.onrender.com/vendors/users/vendorslug', {
            slug: slug
        })
        if(response.data.data !== null){
            res.json({ vendorDetails: response.data.data })
        }else{
            res.json({ message: 'no vendor account yet' })
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}



// fetch top 8 vendors
const findTopVendors = async (req, res) => {
    try{
        let response = await axios.get('https://gateway-6ew9.onrender.com/vendors/users/topvendors')
            
        if(response.data.foundvendors !== null){
            res.json({ vendors: response.data.foundvendors })
        }else{
            res.json({ message: 'no product uploaded yet' })
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}



// update call lead 
const upCallLead = async (req, res) => {
    try{
        let slug = req.params.slug
        let response = await axios.post('https://gateway-6ew9.onrender.com/vendors/users/calllead', {
            slug: slug
        })
        if(response.data.message !== ''){
            res.json({ message: 'lead updated' })
        }else{
            res.json({ message: 'no vendor account yet' })
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}


// update message lead 
const upMessageLead = async (req, res) => {
    try{
        let slug = req.params.slug
        let response = await axios.post('https://gateway-6ew9.onrender.com/vendors/users/messagelead', {
            slug: slug
        })
        if(response.data.message !== ''){
            res.json({ message: 'lead updated' })
        }else{
            res.json({ message: 'no vendor account yet' })
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}



module.exports = {
    topProduct,
    findVendors,
    findTopVendors,
    findVideo,
    findProducts,
    findProductWithSlug,
    findVendorWithSlug,
    upMessageLead,
    upCallLead,
}
