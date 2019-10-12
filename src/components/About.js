import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="https://scontent.fktm3-1.fna.fbcdn.net/v/t31.0-8/26172530_1582223248511915_8250746139249269310_o.jpg?_nc_cat=110&_nc_oc=AQmegnLAMIs2SDt3IGp252U53lRXDVUZ9w2K23fs0QdVyZKSl_0wqNaw0BAldv_uT_g&_nc_ht=scontent.fktm3-1.fna&oh=226f798660c7fa273d1998608944c426&oe=5DF601EF" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               {/*<div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>*/}
            </div>
         </div>
      </section>
    );
  }
}