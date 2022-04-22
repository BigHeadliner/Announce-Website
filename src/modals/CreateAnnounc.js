import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateAnnouncPopup = ({modal, toggle, save}) => {
    const [announcName, setAnnouncName] = useState('');
    const [description, setDescription] = useState('');  
    const [date, setDate] = useState('');  
    const [createBtn, setCreateBtn] = useState(true);  
    

    const launchCreateBtn = (val) => {

        if (val.target.value !== "") {

            setCreateBtn(false)
        }

    }
        

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "announcName"){
            setAnnouncName(value)
          
        } if(name === "description" ){
            setDescription(value) } 

         if(name === "date" ){
            setDate(value)
          
        } 
      
      

    } 
    

    const handleSave = (e) => {
        e.preventDefault()
        let announcObj = {}
        announcObj["Name"] = announcName
        announcObj["Description"] = description 
        announcObj["Date"] = date
        save(announcObj)

    } 

   
    
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Announce</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Announce</label>
                        <input type="text" className = "form-control"  value = {announcName}  onChange = {handleChange}  onInput = {launchCreateBtn} name = "announcName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div> 
                    <div className = "form-group">
                        <label>Date</label>
                       <input type="date" className = "form-control"  value = {date}  onChange = {handleChange} name="date" />
                    </div>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave} disabled={createBtn}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateAnnouncPopup;