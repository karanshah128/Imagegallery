import { confirmAlert } from "react-confirm-alert";
import Food2 from '../Component/Assets/Img/Food/Food2.jpg'
import Food1 from '../Component/Assets/Img/Food/Food1.jpg'
import Birds2 from '../Component/Assets/Img/Birds/Birds2.jpg'
import Birds1 from '../Component/Assets/Img/Birds/Birds1.jpg'
import Beaches1 from '../Component/Assets/Img/Beaches/Beaches1.jpg'
import Beaches2 from '../Component/Assets/Img/Beaches/Beaches2.jpg'
import Mountain1 from '../Component/Assets/Img/Mountain/Mountain1.jpg'
import Mountain2 from '../Component/Assets/Img/Mountain/Mountain2.jpg'

export function isNullEmpty(e) {
var  regex = /^[a-zA-Z0-9]*$/

    if (e === null || e === ''|| e===undefined || regex.test(e)) {
        return true;
    }
    return false;
   }

   export function showAlert(msg){

    confirmAlert({
        title: "Alert!",
        message: msg,
        buttons: [
          {
            label: 'Ok',
            onClick: () => { return false }
          },

        ]
      })
}



export function showSuccess(msg){

  confirmAlert({
      message: msg,
      buttons: [
        {
          label: 'Ok',
          onClick: () => { return false }
        },

      ]
    })
}


export function validEmail(email){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var response = re.test(email)
  return response
}


export function cookies(name,value,days){
  let date = new Date();
  date.setTime(date.getTime()+(days*24*60*60*1000));
const expires ="expires=" + date.toUTCString();
document.cookie = name +  "=" + value + ";" + expires + ";path=/"
}




  const imageArray = [
    {
      "id": "1",
      "name": "MT",
      "imageName": "Mountain",
      "imageArray": [
        { "Image": Mountain1 },
        { "Image": Mountain2 }
      ]

    },
    {
      "id": "2",
      "name": "BH",
      "imageName": "Beaches",
      "imageArray": [

        { "Image": Beaches1 },
        { "Image": Beaches2 }

      ]

    },


    {
      "id": "3",
      "name": "BD",
      "imageName": "Birds",
      "imageArray": [

        { "Image": Birds1 },
        { "Image": Birds2 }

      ]

    },



    {
      "id": "4",
      "name": "FD",
      "imageName": "Food",
      "imageArray": [

        { "Image": Food1 },
        { "Image": Food2 }

      ]

    },




  ]


  export default imageArray