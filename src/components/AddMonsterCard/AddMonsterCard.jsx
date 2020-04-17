import React from 'react';
import {Link} from 'react-router-dom';

function AddMonsterCard({monster, handleDeleteMonster}) { 
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{monster.name}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Name</dt>
                    <dd>{monster.name}</dd>
                    <dt>HP</dt>
                    <dd>{monster.hp}</dd>
                    <dt>MP</dt>
                    <dd>{monster.mp}</dd>
                    <dt>Attack</dt>
                    <dd>{monster.attack}</dd>
                    <dt>Defense</dt>
                    <dd>{monster.defense}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link
                    className='btn btn-xs btn-warning'
                    to={{
                        pathname: '/edit',
                        state: {monster}
                    }}
                >
                EDIT
            </Link>
            <button
                className='btn btn-xs btn-danger margin-left-10'
                onClick={() => handleDeleteMonster(monster._id)}
            ></button>
            </div>
            </div>
    )
}

export default AddMonsterCard;