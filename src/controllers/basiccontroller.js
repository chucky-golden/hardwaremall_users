const axios = require('axios')

// fetch all product
const findProducts = async (req, res) => {
    try {
        let response = await axios.get('https://admin-dqcw.onrender.com/users/products')
        
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
        
        let response = await axios.post('https://admin-dqcw.onrender.com/users/productsslug', {
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
        let response = await axios.get('https://admin-dqcw.onrender.com/users/topproducts')
        
        if(response.data.message !== null){
            res.json({ products: response.data.message })
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
        let response = await axios.get('https://admin-dqcw.onrender.com/users/findvideo')
        
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
        let response = await axios.get('https://vendors-jpnc.onrender.com/users/vendors')
            
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

        let response = await axios.post('https://vendors-jpnc.onrender.com/users/vendorslug', {
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
        let response = await axios.get('https://vendors-jpnc.onrender.com/users/topvendors')
            
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
        let response = await axios.post('https://vendors-jpnc.onrender.com/users/calllead', {
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
        let response = await axios.post('https://vendors-jpnc.onrender.com/users/messagelead', {
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
