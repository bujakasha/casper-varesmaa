





import axios from 'axios'
import request from 'superagent'

const addFieldData = (field, value, data )=>{
    if(!value){
        return data
    }else{
        return {
            ...data,
            [field]: [{"value":value}]
        }
    }
}
export const postSoittopyynto = (data) => {
    let json = {
        "contact_form":[{"target_id":"soittopyynto"}],
        "subject":[{"value":"Yhteydenotto"}],
        "message":[{"value":"Soittopyyntö"}],
    }
    json = addFieldData('field_nimi',data.nimi,json);
    json = addFieldData('field_paivamaara',data.ajankohta,json);
    json = addFieldData('field_tuntu',data.tunti,json);
    json = addFieldData('field_puhelin',data.puhelin,json);

    return  request
    .post('https://casper-varesmaa.fi/contact_message')
    .set('api-key','2142015097a5f7ff0065e9c7e42f156f')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(json)
    .end((err, res) => {
      console.log('request ended',err,res)
      return res;
    });
    
    /*axios.post('http://207.154.201.55/contact_message', 
            json, {
            headers: {
                'Content-Type': 'application/json',
                'api-key':'2142015097a5f7ff0065e9c7e42f156f',
            }
        }
    )*/
    /*
    request
    .post('https://casper-varesmaa.fi/contact_message')
    .set('api-key','2142015097a5f7ff0065e9c7e42f156f')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(json)
    .end((err, res) => {
      console.log('request ended',err,res)
      return res;
    });*/
  }

