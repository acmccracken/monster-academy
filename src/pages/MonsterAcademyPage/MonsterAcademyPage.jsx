import React from 'react';
import './MonsterAcademyPage.css';
import AddMonsterCard from '../../components/AddMonsterCard/AddMonsterCard';

function MonsterAcademyPage(props) {
  return (
    <>
      <h1>My Academy</h1>
      <div className='MonsterAcademyPage-grid'>
        {props.monsters.map(monster =>
            monster.owner===props.user._id ?
            <AddMonsterCard
            key={monster._id}
            monster={monster}
            handleDeleteMonster={props.handleDeleteMonster}
            user={props.user}

            />
            :
            <></>
        )}
      </div>
    </>
  );
}

export default MonsterAcademyPage;
