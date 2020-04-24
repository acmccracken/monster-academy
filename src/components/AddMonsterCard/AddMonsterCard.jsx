import React from 'react';
import {Link} from 'react-router-dom';


function AddMonsterCard({monster, handleDeleteMonster, user}) { 
    return (
        <div className='panel panel-default'>
            
            <div className='panel-body'>
                <dl>
                    <dt>Name: &nbsp;&nbsp; {monster.name}</dt>
                    <dt>HP:&nbsp;&nbsp; {monster.hp}</dt>
                    <dt>MP: &nbsp;&nbsp; {monster.mp}</dt>
                    <dt>Attack: &nbsp;&nbsp; {monster.attack}</dt>
                    <dt>Defense: &nbsp;&nbsp; {monster.defense}</dt>
                </dl>
            </div>
            <div className='panel-footer'>
                {monster.owner === user._id  ?
                    <Link
                        className='btn btn-xs btn-info'
                        to={{
                            pathname: '/edit',
                            state: {monster}
                        }}
                    >
                EDIT
                </Link>
                :
                <></>
                }
                {monster.owner === user._id  ?
                    <button
                        className='btn btn-danger'
                        onClick={() => handleDeleteMonster(monster._id)}
                    ></button>
                    :
                <></>
                }
                
            </div>
            </div>
    )
}

export default AddMonsterCard;