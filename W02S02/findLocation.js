const{regencies, provinces}=require('./location')

class Province{
    regencies=[]

    constructor(id, name, alt_name, lat, long){
        this.id=id
        this.name=name
        this.alt_name=alt_name
        this.lat=lat
        this.long=long

        this.loadRegencies()
    }

    provinceName(){
        console.log(`\n Province Name: ${this.name}`)
    }
    loadRegencies(){
        for(let reg of regencies){
            if(reg.province_id==this.id){
                let newRegency=new Regency(
                    reg.id,
                    reg.name,
                    reg.alt_name,
                    reg.latitude,
                    reg.longitude,
                    this,
                )
                this.regencies.push(newRegency)
            }
        }
        // console.log("\n")

    }
    findRegencyByName(name){
        for(let reg of this.regencies){
            if(reg.name==name){
                return true
            }
        }
        return false
    }

    findRegencyByID(id){
        for(let reg of this.regencies){
            if(reg.id==id){
                return reg            
            }           
        }
        return false
    }
}

class Regency{
   constructor(id, name, alt_name, lat, long, province){
        this.id=id
        this.name=name
        this.alt_name=alt_name
        this.lat=lat
        this.long=long
        this.province=province
   } 
}

class Location{
    provinceList=[]
   
    constructor(){
       this.loadProvince()
    //    this.loadRegencies
     
    }
        loadProvince(){

            for(let province of provinces){
                let newProvince=new Province(
                    province.id,
                    province.name,
                    province.alt_name,
                    province.latitude,
                    province.longitude
                )
                this.provinceList.push(newProvince)
            
            }

        }

        findRegenciesByProvinceName(str){
            for(let prv of this.provinceList){
                if(prv.name==str){
                    let myRegencies=prv.regencies
                        for(let reg of myRegencies){
                            console.log(reg.province.id)
                        }
                }
             
                
            }
        }

        findProvinceByRegencyName(name){
            for(let prov of this.provinceList){
                if(prov.findRegencyByName(name)){
                    console.log(prov.name)
                }
            }
        }

        findProvinceByRegencyID(id){
            for(let prov of this.provinceList){                
                if(prov.findRegencyByID(id)){
                        console.log(prov.name)
                }
                
            }
        }

    }

    let location=new Location()

    // location.findProvinceByRegencyName("KOTA JAKARTA TIMUR")
    location.findProvinceByRegencyID(1101)

    // let sumatera=new Province(
    //     "12"
    // )

    // console.log(sumatera.regencies)

        // loadRegencies(){
        //     for(let regency of regencies){
        //         newRegency=new Regency(
        //             regency.id,
        //             regency.province_id,
        //             regency.name,
        //             regency.alt_name,
        //             regency.latitude,
        //             regency.longitude
        //         )
        //         console.log(provinceList.push(newProvince))
            
        //     }
        // }

        // getProvinceByID(id){
        //      //print province name and list
        //     //regencies based on province id
        //     //cari province objeknya berdasarkan id
            
        //     console.log(`id ${id}`)

        //     for(let province of provinces){
        //         if(province.id==id){
        //             newProvince(
        //                 province.id,
        //                 province.name,
        //                 province.alt_name,
        //                 province.latitude,
        //                 province.longitude
        //             )
        //             newProvince.provinceName(id)
        //             newProvince.regencies(id)
        //         }            
        //     }

        //     return 

           
        //     // console.log(`id ${id}`)
        //     // loadProvince()
        //     //     if(province.id==id){
        //     //         console.log(this.loadProvince)
        //     //     }

        //     //province.name()
        //     // province.regencies()
        //     //getX adalah method yg di province biar bisa nge load berdasarkan provincelist
        // }

    

    // newCari=new Provinces();
    // newCari.getProvinceByID(11);
    

