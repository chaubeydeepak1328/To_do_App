import React, {useState } from "react";
import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Edit from "@mui/icons-material/Edit";
import TodoCard from "./TodoCard";

const Todo = () => {

    //Getting Time 
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    let meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;

    // End Here 

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const [items, setItems] = useState([]);
    const [toggle,setToggle] = useState(true);

    const Additem = () => {
        title === "" && desc === "" ? alert("Please enter an title or Description") : setItems([...items, {
            t: title,
            d: desc,
            time:currentDate.toDateString() + ", " + timeString
        }])
        setTitle('');
        setDesc('');
        setToggle(true);
    }

    const handleDelete = (id) => {
        setItems(items.filter((curVal, index) => index !== id));
    };


    const handleEdit = (id)=>{
        setToggle(false);
        setTitle(items[id].t);
        setDesc(items[id].d);
        handleDelete(id);
    }

    const removeAll = ()=>{
        setItems([]);
    }


    return (
        <>
            <div className="todo__container">
                <div className="main_div">
                    <div className="child_div">
                        <TextField id="standard-basic" label="Title" variant="standard" value={title} onChange={(e) => {
                            setTitle(e.target.value)
                        }} />
                        <TextField id="standard-basic" label="Description" variant="standard" value={desc} onChange={(e) => {
                            setDesc(e.target.value);
                        }} />

                    </div>
                    <Button variant="contained" color="primary" className="btn"
                        style={{ borderRadius: '50%' }} onClick={Additem}>{toggle ? <AddIcon /> : <Edit/> }</Button>
                </div>
                <Button variant="contained" color="primary" style={{ width: 'fit-content', alignSelf: 'center' }} data-sm-link-text="Remove All" onClick={removeAll} >clear All</Button>
                <div className="showItem">
                    {items.map((curElm, index) => {
                        return (
                            <TodoCard key={index} id={index} title={curElm.t} desc={curElm.d} time={curElm.time} onDelete={handleDelete} onEdit={handleEdit}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Todo;