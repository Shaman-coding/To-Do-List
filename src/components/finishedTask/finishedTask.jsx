import React from 'react';
import F from './finishedTask.module.css';

const FinishedTask = ({finishedTasks,RemoveTusk}) => {

    return (
        <div className={F.containers}>
               <h2>Завершённые задачи</h2>

            <div>
                {finishedTasks.map(finTask => <div className={F.finTisksBlock}>
                    <div className={F.finItems}>{finTask.finishedTusk}</div>
                    <div>
                        <button onClick={() => RemoveTusk(finTask.id)}>Удалить</button>
                    </div>

                </div>)}
            </div>
        </div>
    )
}

export default FinishedTask;