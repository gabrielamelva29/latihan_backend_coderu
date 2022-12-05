
const fs = require('fs');

// GET PROVINCE
function getListProvince(req, res) {
  // let data=req.query
  fs.readFile('./province.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error")
      return;
    }
    let dataJson = JSON.parse(data)
    res.status(200).send(dataJson)
  });
};

//get province by id
function getProvinceByID(req, res) {
  let id = req.params.id

  fs.readFile('./province.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error")
      return;
    }

    let provinceList = JSON.parse(data)

    for (let province of provinceList) {
      if (province.id == id) {
        return res.status(200).send(province)
      }
    }
    res.status(400).send("Data not found")
  });
};

//CREATE PROVINCE
function createProvince(req, res) {
  let newData = req.body

  fs.readFile('./province.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error")
      return;
    }

    let provinceList = JSON.parse(data)
    provinceList.push(newData)

    fs.writeFile('./province.json', JSON.stringify(provinceList), err => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error")
      }
      return res.status(200).send("Success to add province")
    });

  });

};

//UPDATE PROVINCE
function updateProvince(req, res) {
  let id = req.params.id
  const { name, alt_name, latitude, longitude } = req.body

  fs.readFile('./province.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error")
      return;
    }

    let provinceList = JSON.parse(data)
    for (let province of provinceList) {
      if (province.id == id) {
        province.name = name
        province.alt_name = alt_name
        province.latitude = latitude
        province.longitude = longitude
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

};

//DELETE PROVINCE
function deleteProvince(req, res) {
  let idProv = req.params.id

  fs.readFile('./province.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error")
      return;
    }

    let provinceList = JSON.parse(data)
    let indexProvince
    // provinceList.push(newData)

    for (let index = 0; index < provinceList.length; index++) {
      if (provinceList[index].id == idProv) {
        indexProvince = index
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

};

//get province by regency name
function findProvinceByRegencyName(req, res) {

  let nameReg = req.params.id
  // let regencyList=[]
  console.log(nameReg)
  let provinceId


  let data = fs.readFileSync('./regency.json', 'utf8')

  regencyList = JSON.parse(data)
  for (let regency of regencyList) {
    console.log(regency)
    if (regency.name == nameReg) {
      provinceId = regency.province_id
    }
  }

  fs.readFile('./province.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error")
      return;
    }

    let provinceList = JSON.parse(data)
    for (let province of provinceList) {
      if (province.id == provinceId) {
        return res.status(200).send(province)
      }
    }

    res.status(400).send("Data not found")

  });
};

module.exports = {
  getListProvince,
  getProvinceByID,
  createProvince,
  updateProvince,
  deleteProvince,
  findProvinceByRegencyName
}