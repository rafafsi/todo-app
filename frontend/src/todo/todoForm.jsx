import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'


export default props => (
    <div role='form' className='todoForm'>
        
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Add a task'/> 
        </Grid>

     
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' ></IconButton>
            <IconButton style='primary' icon='minus' ></IconButton>
        </Grid>
    </div>
)

/* 
    12 tamanho pra celular
    9 small devices
    10 medium devices
*/