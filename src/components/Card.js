import React, {useState} from 'react';
import EditAnnounc from '../modals/EditAnnounc' 
// import {format} from 'date-fns'

const Card = ({announcObj, index, deleteAnnounc, updateListArray}) => {
    const [modal, setModal] = useState(false);
    console.log(announcObj)
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
   
    const toggle = () => {
        setModal(!modal);
    }

    const updateAnnounc = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteAnnounc(index)
    }  

    // const calendarDate = format(new Date(), "dd/MM/yy")  

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "announc-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{announcObj.Name}</span>
                <p className = "mt-3">{announcObj.Description}</p> 
                <span className='dateTime'> {announcObj.Date}</span>
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}> 
                   
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditAnnounc modal = {modal} toggle = {toggle} updateAnnounc = {updateAnnounc} announcObj = {announcObj}/>
        </div>
    );
};

export default Card;