import React from 'react';
import M from "./mainStyle.module.css";
import { Form } from 'react-bootstrap';

const MainFile = ({Alltusk, tusks, addNewTusk, currentTusks, removeTusk, finishedTusk}) => {
    const handleChange = (e) => {
        currentTusks(e.target.value)
    }

    const onToChange = (idFinishedTusk, id) => {
        finishedTusk(idFinishedTusk, id)
    }

    return (
        <div>
          <div className={M.wrapperBlock}>
              <div className={M.tuskCount}>Всего задач: {Alltusk.length}</div>

              <div>
                  <Form.Control type="text" placeholder="Введите задачу..." value={tusks} onChange={handleChange} />
              </div>
              <div className={M.btn}>
                  <button onClick={addNewTusk}> Добавить задачу</button>
              </div>
          </div>

            <div className={M.fieldsForTusk}>
                <div>
                    {Alltusk.map(tus => <div className={M.tuskItems}>
                        <Form.Check name={'check'} onChange={() => onToChange(tus.tusk,tus.id) }  aria-label="option 1" />
                        <div className={M.tuskItem}>{tus.tusk}</div>
                        <div><button className={M.btn} onClick={() => removeTusk(tus.id)}>Удалить</button></div>
                    </div>)}
                </div>

            </div>
        </div>
    )
}
export default MainFile;