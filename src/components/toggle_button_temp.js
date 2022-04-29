import './styles/ToggleSwitch_temp.scss'
import './styles/style_temp.css'
import firebase from 'firebase';
import jQuery from 'jquery';


  export default function ToggleSwitch_temp() {
   
   
    jQuery(function(){
      var database = firebase.database();
    var Led1Status;
    let firebaseRef = firebase.database().ref().child("LED");

    database.ref().on("value", function(snap){
      Led1Status = snap.val().Led1Status;
      if(Led1Status === "OFF"){    // check from the firebase
        firebase.database().ref("LED").set({  Led1Status:"ON"})
      } else {
        firebase.database().ref("LED").set({  Led1Status:"OFF"})
      }
    });
  
    
  });
   

    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  
}

