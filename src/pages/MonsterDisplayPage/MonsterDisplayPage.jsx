import React from 'react';
import './MonsterDisplayPage.css';
import AddMonsterCard from '../../components/AddMonsterCard/AddMonsterCard';

function MonsterDisplayPage(props) {
  return (
    <>
      <h1>Monsters</h1>
      <div className='MonsterDisplayPage-grid'>
        {props.monsters.map(monster =>
            <AddMonsterCard
            key={monster._id}
            monster={monster}
            handleDeleteMonster={props.handleDeleteMonster}
            user={props.user}

            />
        )}
      </div>
    </>
  );
}

export default MonsterDisplayPage;
