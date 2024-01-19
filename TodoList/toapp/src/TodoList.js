import React, { useContext, useState, useEffect , useReducer} from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { CredentialContext } from './App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



const TodoList = () => {
    const forceUpdate = () => {
        dispatch({ type: 'FORCE_UPDATE' });
      };
    const [state, dispatch] = useReducer(2, 1);
    const [task, setTask] = useState('');
    const [todo, setTodo] = useState([]);
    let id = 0;
    const [add, setAdd] = useState(id);
    const [credentials] = useContext(CredentialContext);

    const email = credentials.email;
    let newTask;
    let delConfirm = true;
    const navigate = useNavigate();

    const useEf = useEffect(() => {
        if (email) {
            axios.get(`http://localhost:4000/tasks`)
                .then(response => {
                    console.log(response.data.tasks);
                    return response.data.tasks; // Return tasks array to the next then block
                })
                .then(tasks => {
                    // Filter tasks based on credentials.email
                    const filteredTasks = tasks.filter(task => task.email === credentials.email);
                    setTodo(filteredTasks); // Set filtered tasks to state
                    console.log('todo data', filteredTasks);
                })
                .catch(error => {
                    console.error('Error fetching tasks:', error);
                });
        }
    }, [email, credentials.email]);







    const handleAddTask = async () => {
        const email = credentials.email;
        const isComp = false;
        console.log(email);
        try {
            await fetch(`http://localhost:4000/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    task,
                    isComp,
                })
            });
    
            // Update todo list locally
            const updatedTodo = [...todo, { email, task, isComp }];
            setTodo(updatedTodo);
        } catch (error) {
            console.error('Error adding task:', error);
        }
        setTask("");
    };
    const handleEditTask = async (index) => {
        try {
            const id = todo[index]._id;
            const newTask = prompt("Enter new task for editing");
    
            // Create a copy of the todo list
            const updatedTodo = [...todo];
            updatedTodo[index].task = newTask;
    
            // Update state optimistically
            setTodo(updatedTodo);
    
            const response = await axios.put(`http://localhost:4000/update/${id}`, {
                newTask,
            });
    
            if (response.status === 200) {
                // No need to update todo list here as it's already updated optimistically
                console.log('Task updated successfully');
            } else {
                console.error('Error:', response.data);
                // Handle error - Maybe show a message to the user
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle fetch error
        }
    };
    

    const handleLogout = () => {
        setTodo([]);
        navigate("/");
    }
    const handleDelete = async (index) => {
        const id = todo[index]._id;
    
        // Create a copy of the todo list without the deleted item
        const updatedTodo = todo.filter((_, idx) => idx !== index);
        setTodo(updatedTodo);
    
        try {
            await fetch(`http://localhost:4000/delete?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            console.log('Task deleted successfully');
        } catch (error) {
            console.error('Error:', error);
            // Handle fetch error
        }
    };
    


    return (
        <div className="container-fluid vh-100 bg-white d-flex align-items-center justify-content-center">
            <div className="row d-flex justify-content-center align-items-center h-custom rounded shadow p-4">
                <div className="row">
                    <div className="col-md-8">

                    </div>
                    <div className="col-md-4">
                        <button className='btn btn-sm btn-primary position-absolute top-0 end-0 m-2' onClick={handleLogout}>
                            <ExitToAppIcon /> Logout
                        </button>
                    </div>

                </div>

                <div className="row text-center mb-4">
                    <h2>Welcome, {credentials.user}</h2>

                    <div className="row"><br /><br /></div>

                    <div className="col-md-9 col-lg-6 col-xl-5 mb-3">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid"
                            alt="Sample image"
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <h2 className="mb-4">Enter task for adding..........!</h2>
                        <br />
                        <div className="row mb-3">
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    value={task}
                                    onChange={(e) => {
                                        setTask(e.target.value);
                                        console.log(e.target.value);
                                    }}
                                    id="form3Example4"
                                    className="form-control form-control-lg"
                                    placeholder="Enter task for adding"
                                />
                            </div>
                            <div className="col-md-2">
                                <button
                                    className="btn btn-primary btn-lg"
                                    onClick={handleAddTask}
                                >
                                    <AddIcon />
                                </button>
                            </div>
                        </div>
                        {/* Display the tasks */}

                        <div className='text-start'>
                            {todo.map((task, index) => (
                                <li
                                    className="text-start"
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '10px',
                                        borderBottom: '2px solid blue',
                                    }}
                                >
                                    <div className="col-mg-1"><input type="checkbox" style={{ transform: 'scale(1.5)' }} /></div>
                                    <div className="col-mg-8">
                                        <span style={{ flex: '1' }}>{task.task}</span>
                                    </div>

                                    <div className='col-mg-2'>
                                        <Button variant="contained" color="primary" style={{ padding: '5px' }}>
                                            <DeleteIcon
                                                onClick={() => {
                                                    handleDelete(index);
                                                }}
                                                style={{ fontSize: '1.5em', color: 'white' }}
                                            />
                                        </Button>
                                    </div>
                                    <div className='col-mg-2'>
                                        <Button
                                            onClick={() => {
                                                handleEditTask(index);
                                            }}
                                            variant="contained"
                                            color="primary"
                                            style={{ padding: '5px' }}
                                        >
                                            <EditIcon style={{ fontSize: '1.5em', color: 'white' }} />
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </div>




                    </div>
                </div>
            </div>
        </div >
    );
};

export default TodoList;
