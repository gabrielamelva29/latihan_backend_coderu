const { DESTRUCTION } = require('dns');
const express=require('express')
const app=express()

app.use(express.json())
const fs = require('fs');

//sample
//localhost:3000?id=1&name=Aceh
// app.get('/', (req, res) => {
//     let data=req.query
//     console.log("Hello World")
//     res.status(200).send(data)
//   });

//sample
//get by params
//localhost:3000/province/1
// app.get('/province/:id', (req, res) => {
//     let data=req.params
//     console.log("Hello World");
//     res.status(200).send(`Your id is ${data.id}`)
//   });

// =========CRUD PROVINCE==========
//GET LIST PROVINCE
  app.get('/province', (req, res)=>{
    // let data=req.query
    fs.readFile('./province.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }
      let dataJson=JSON.parse(data)
      res.status(200).send(dataJson)
    });
  });

  //GET PROVINCEBYID
  app.get('/province/:id', (req, res) => {
    let id=req.params.id

    fs.readFile('./province.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }

      let provinceList=JSON.parse(data)

      for(let province of provinceList){
        if(province.id==id){
          return res.status(200).send(province)
        }
      }
      res.status(400).send("Data not found")
    });
  });

  //DELETE PROVINCEBYID
  app.delete('/province/:id', (req, res) => {
    let idProv=req.params.id
 
    fs.readFile('./province.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }

      let provinceList=JSON.parse(data)
      let indexProvince
      // provinceList.push(newData)

      for(let index=0; index<provinceList.length; index++){
        if(provinceList[index].id==idProv){
          indexProvince=index
          break
          // return res.status(200).send(`Deleted province with id is ${id}`)
        }
      }

      provinceList.splice(indexProvince, 1)
      fs.writeFile('./province.json', JSON.stringify(provinceList), err => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error")
        }
        return res.status(200).send("Success to add delete province")
      });

      res.status(404).send("Data not found")
    
    });

  });

  //UPDATEPROVINCE
  app.put('/province/:id', (req, res) => {
    let id=req.params.id
    const {name, alt_name, latitude, longitude} = req.body
 
    fs.readFile('./province.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }

      let provinceList=JSON.parse(data)
      for(let province of provinceList){
        if(province.id==id){
          province.name=name
          province.alt_name=alt_name
          province.latitude=latitude
          province.longitude=longitude
          break  
        }
      }

      fs.writeFile('./province.json', JSON.stringify(provinceList), err => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error")
        }
        return res.status(200).send(`Success to update province ${id}`)
      });
    
    });

  });

  //POSTPROVINCE
  app.post('/province', (req, res) => {
    let newData=req.body
 
    fs.readFile('./province.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
        return;
      }

      let provinceList=JSON.parse(data)
      provinceList.push(newData)

      fs.writeFile('./province.json', JSON.stringify(provinceList), err => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error")
        }
        return res.status(200).send("Success to add province")
      });
    
    });

  });


// =========CRUD REGENCY==========
  //GET LIST REGENCY
  app.get('/regency', (req, res)=>{
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
  });

  //GET REGENCYBYID
  app.get('/regency/:id', (req, res) => {
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
  });

   //POSTREGENCY
   app.post('/regency', (req, res) => {
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

  });

  //UPDATEREGENCY
  app.put('/regency/:id', (req, res) => {
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

  });

    //DELETE REGENCYBYID
  app.delete('/regency/:id', (req, res) => {
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

  });

//=======W03S01========
  // app.post('/', (req, res) => {
  //   let data=req.body
  //   console.log("Hello World Post", data);
  //   res.send(data)
  // });


  app.put('/', (req, res) => {
    console.log("Hello World");
    res.send("Hello World Put’")
  });

  app.delete('/', (req, res) => {
    console.log("Hello World");
    res.send("Hello World Delete’")
  });

  // Get API Regency by Province ID
  app.get('/RegByProvID/:id', (req, res) => {
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
  });

  // Get API Regency By Province Name
  app.get('/regency/RegByProvName/:id', (req, res) => {
    
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
    });


// Get API Province Name by Regency Name
app.get('/province/ProvByRegName/:id', (req, res) => {
    
  let nameReg=req.params.id
  // let regencyList=[]
  let provinceId
  fs.readFile('./regency.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error")
      return;
    }    
      
   regencyList=JSON.parse(data)
      for(let regency of regencyList){
        if(regency.name==nameReg){
          provinceId=regency.province_id
        }
      }
    });

        fs.readFile('./province.json', 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error")
            return;
          }

          let provinceList=JSON.parse(data)
          let newProvinces=null 
          for(let province of provinceList){
            if(province.id==provinceId){
              return res.status(200).send(province)
            }
          }

          res.status(400).send("Data not found")
              
  });
  });


//////////////revisi=================
// app.get('province/ProvByRegName/:name', (req, res) => {
    
//   let nameReg=req.body.name
//   fs.readFile('./regency.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Internal Server Error")
//       return;
//     }    
      
//     regencyList=JSON.parse(dataRegency)

//       let idProv
//       for(let regency of regencyList){
//         if(regency.name==nameProv){
//           idProv==regency.province_id
//         }

//         fs.readFile('./province.json', 'utf8', (err, data) => {
//           let provinceList=JSON.parse(data)
//           for(let province of provinceList){
//             if(province.id==idProv){
//               return res.status(200).send(province.name)
//             }
//           }
              
//   });
//   }
// });
// });

  console.log("App running on port 3000")
  
  app.listen(3000);
  