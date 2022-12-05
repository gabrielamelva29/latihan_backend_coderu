const fs = require('fs');

//GET LIST REGENCY
function getListRegency(req, res){
    // let data=req.query
    fs.readFile('./regency.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }
      let dataJson=JSON.parse(data)
      res.status(200).send(dataJson)
    });
  };

  //GET REGENCYBYID
  function getRegencyByID(req, res){
    let id=req.params.id

    fs.readFile('./regency.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }

      let regencyList=JSON.parse(data)

      for(let regency of regencyList){
        if(regency.id==id){
          return res.status(200).send(regency)
        }
      }
      res.status(400).send("Data not found")
    });
  };

   //POSTREGENCY
   function createRegency(req, res){
    let newData=req.body
 
    fs.readFile('./regency.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }

      let regencyList=JSON.parse(data)
      regencyList.push(newData)

      fs.writeFile('./regency.json', JSON.stringify(regencyList), err => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error")
        }
        return res.status(200).send("Success to add regency")
      });
    
    });

  };

  //UPDATEREGENCY
  function updateRegency(req, res){
    let id=req.params.id
    const {province_id,name, alt_name, latitude, longitude} = req.body
 
    fs.readFile('./regency.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }

      let regencyList=JSON.parse(data)
      for(let province of regencyList){
        if(province.id==id){
          province.province_id=province_id
          province.name=name
          province.alt_name=alt_name
          province.latitude=latitude
          province.longitude=longitude
          break  
        }
      }

      fs.writeFile('./regency.json', JSON.stringify(regencyList), err => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error")
        }
        return res.status(200).send(`Success to update regency ${id}`)
      });
    
    });

  };

    //DELETE REGENCYBYID
  function deleteRegency(req, res){
    let idReg=req.params.id
 
    fs.readFile('./regency.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }

      let regencyList=JSON.parse(data)
      let indexRegency
      // provinceList.push(newData)

      for(let index=0; index<regencyList.length; index++){
        if(regencyList[index].id==idReg){
          indexRegency=index
          break
          // return res.status(200).send(`Deleted province with id is ${id}`)
        }
      }

      regencyList.splice(indexRegency, 1)
      fs.writeFile('./regency.json', JSON.stringify(regencyList), err => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error")
        }
        return res.status(200).send("Success to add delete province")
      });

      res.status(404).send("Data not found")
    
    });

  };

   // Get API Regency by Province ID
   function findRegencyByProvinceID(req, res){
    let id=req.params.id

    fs.readFile('./regency.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }

      let regencyList=JSON.parse(data)
      let regencyByProvinceId = []
      console.log(data)

      for(let regency of regencyList){
        if(regency.province_id==id){
          regencyByProvinceId.push(regency)
        
        }
      }

      if(regencyByProvinceId.length>0){
        return res.status(200).send(regencyByProvinceId)
      }   
    return res.status(400).send("Data not found")
    });
  };

  // Get API Regency By Province Name
  function findRegencyByProvinceName(req, res){
    
    let nameProv=req.params.id
    let idProv
    fs.readFile('./province.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }

      let provinceList=JSON.parse(data)    

      for(let province of provinceList){
        if(province.name==nameProv){
          idProv=province.id
        }
      }
    });

    fs.readFile('./regency.json', 'utf-8', (err, data)=>{
      if(err){
        console.error(err);
        res.status(500).send("Internal Server Error")
        return
      }

      let regencyList=JSON.parse(data)
      let newData=[]
      for(let regency of regencyList){
        if(regency.province_id==idProv){
          newData.push(regency)
        }
      }

      if(newData.length>0){
        return res.status(200).send(newData)
      }

      return res.status(400).send("Data not found")
    });      
    };

module.exports={
    getListRegency,
    getRegencyByID,
    createRegency,
    updateRegency,
    deleteRegency,
    findRegencyByProvinceID,
    findRegencyByProvinceName
  }