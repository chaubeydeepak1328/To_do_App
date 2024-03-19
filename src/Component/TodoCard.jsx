import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoCard = (props) => {

    const DeleteItem = ()=>{
        props.onDelete(props.id);
    }

    const editItem = ()=>{
        props.onEdit(props.id);
    }

    
    return (
        <Card sx={{ minWidth: 275 }} className='card'>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.time}
                </Typography>
                <Typography variant="body2">
                    {props.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={DeleteItem}>
                    <DeleteIcon />
                </Button>
                <Button variant="contained" onClick={editItem}><EditIcon /></Button>
            </CardActions>
        </Card>
    );
}

export default TodoCard;