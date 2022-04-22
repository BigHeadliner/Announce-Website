import React, {useEffect, useState} from 'react';
import CreateAnnounc from '../modals/CreateAnnounc'
import Card from './Card';



const AnnouncList = () => {
    const [modal, setModal] = useState(false);
    const [announcList, setAnnouncList] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
     
    const filteredAnnouncList = announcList.filter(announc => { 
        return announc.Name.toLowerCase().includes(searchTerm.toLowerCase())
    }) 

    useEffect(() => {
        let arr = localStorage.getItem("announcList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setAnnouncList(obj)
        }
    }, [])


    const deleteAnnounc = (index) => {
        let tempList = announcList
        tempList.splice(index, 1)
        localStorage.setItem("announcList", JSON.stringify(tempList))
        setAnnouncList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = announcList
        tempList[index] = obj
        localStorage.setItem("announcList", JSON.stringify(tempList))
        setAnnouncList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveAnnounc = (announcObj) => {
        let tempList = announcList
        tempList.push(announcObj)
        localStorage.setItem("announcList", JSON.stringify(tempList))
        setAnnouncList(announcList)
        setModal(false)
    }


    return (
        <> 
           
            <div className = "header text-center">
                <h3>Announce Website</h3> 
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Announce</button> 
            </div>   
            <div className='search'>
             <input 
                className='search-input'
                type="text"
                placeholder="Search..." 
                onChange={(event) => { 
                setSearchTerm(event.target.value);
               }}
             />
             </div>
           
            <div className = "announc-container">
            {filteredAnnouncList.map((obj , index) => <Card announcObj = {obj} index = {index} deleteAnnounc = {deleteAnnounc} updateListArray = {updateListArray}/> )}
            </div>
            <CreateAnnounc toggle = {toggle} modal = {modal} save = {saveAnnounc}/>
        </>
    );
};

export default AnnouncList; 
